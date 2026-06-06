import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const blogRoot = path.join(root, 'src/content/blog');

function read(relativePath) {
  return readFileSync(path.join(root, relativePath), 'utf8');
}

function readDist(relativePath) {
  return readFileSync(path.join(dist, relativePath), 'utf8');
}

function assertDistFile(relativePath, message = `${relativePath} exists`) {
  assert.ok(existsSync(path.join(dist, relativePath)), message);
}

function walkMarkdownFiles(dir = blogRoot) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(fullPath);
    return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : [];
  });
}

function frontmatterFor(filePath) {
  const source = readFileSync(filePath, 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(match, `${filePath} has frontmatter`);

  const data = {};
  const lines = match[1].split('\n');
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const fieldMatch = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!fieldMatch) continue;

    const [, key, rawValue = ''] = fieldMatch;
    if (rawValue.trim() === '') {
      const values = [];
      let nextIndex = index + 1;
      while (nextIndex < lines.length && lines[nextIndex].startsWith('  - ')) {
        values.push(lines[nextIndex].replace(/^ {2}-\s*/, '').trim());
        nextIndex += 1;
      }
      if (values.length > 0) {
        data[key] = values;
        index = nextIndex - 1;
      }
      continue;
    }

    data[key] = rawValue.trim().replace(/^['"]|['"]$/g, '');
  }

  return data;
}

function blogPosts() {
  return walkMarkdownFiles()
    .map(filePath => ({ filePath, data: frontmatterFor(filePath) }))
    .filter(post => post.data.draft !== 'true');
}

function unique(values) {
  return [...new Set(values)].sort();
}

function slugifyTag(tag) {
  return tag
    .toLowerCase()
    .replaceAll(' ', '-')
    .replace(/[^a-z0-9-]/g, '');
}

function titleFromHtml(html) {
  return html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '';
}

describe('static site e2e behavior', () => {
  it('build output contains the core public routes', () => {
    [
      'index.html',
      'blog/index.html',
      'search/index.html',
      'projects/index.html',
      'uses/index.html',
      'about/index.html',
      'about/contact/index.html',
      'about/talks/index.html',
      'newsletter/index.html',
      'dough-maker/index.html',
      '404.html',
      'rss.xml',
      'robots.txt',
      'sitemap-index.xml',
    ].forEach(route => assertDistFile(route));
  });

  it('homepage preserves identity, navigation, theme, and latest-writing entry points', () => {
    const html = readDist('index.html');

    assert.match(titleFromHtml(html), /Harry Wolff/);
    assert.match(html, /My name is Harry Wolff/);
    assert.match(html, /MongoDB/);
    assert.match(html, /YouTube/);
    assert.match(html, /Recent Posts/);
    assert.match(html, /href="\/blog\/"/);
    assert.match(html, /href="\/projects\/"/);
    assert.match(html, /href="\/uses\/"/);
    assert.match(html, /href="\/about\/"/);
    assert.match(html, /href="\/search"/);
    assert.match(html, /id="skip-to-content"/);
    assert.match(html, /id="theme-btn"/);
    assert.match(html, /aria-expanded="false"/);
    assert.match(html, /alt="Harry Wolff Profile"/);
  });

  it('global layout keeps SEO and social sharing metadata on shared-layout pages', () => {
    const pages = ['index.html', 'blog/index.html', 'search/index.html'];

    for (const route of pages) {
      const html = readDist(route);
      assert.match(html, /<link rel="canonical" href="https:\/\/hswolff\.com/);
      assert.match(html, /<meta name="description" content="/);
      assert.match(html, /property="og:title"/);
      assert.match(html, /property="og:description"/);
      assert.match(html, /property="og:image"/);
      assert.match(
        html,
        /property="twitter:card" content="summary_large_image"/
      );
      assert.match(html, /<link rel="sitemap" href="\/sitemap-index\.xml"/);
    }
  });

  it('all non-draft blog posts have public detail pages with article affordances', () => {
    const posts = blogPosts();
    assert.equal(posts.length, 65);

    for (const { data } of posts) {
      assert.ok(data.title, 'post has a title');
      assert.ok(data.date, `${data.title} has a date`);
      assert.ok(data.category, `${data.title} has a category`);
      assert.ok(data.postSlug, `${data.title} has a postSlug`);

      const route = `blog/${data.postSlug}/index.html`;
      assertDistFile(route, `${data.title} has a generated detail page`);

      const html = readDist(route);
      assert.match(
        html,
        new RegExp(data.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      );
      assert.match(html, /<article id="article" role="article"/);
      assert.match(html, /property="og:type" content="article"/);
      assert.match(html, new RegExp(`href="/blog/category/${data.category}/"`));
      assert.match(html, /min read/);
    }
  });

  it('blog index pagination reflects the configured archive size', () => {
    const siteConfig = read('src/config.ts');
    const postPerPage = Number(siteConfig.match(/postPerPage:\s*(\d+)/)?.[1]);
    assert.equal(postPerPage, 10);

    const totalPages = Math.ceil(blogPosts().length / postPerPage);
    assert.equal(totalPages, 7);

    assertDistFile('blog/index.html');
    for (let page = 2; page <= totalPages; page += 1) {
      assertDistFile(`blog/${page}/index.html`);
    }

    const firstPage = readDist('blog/index.html');
    assert.match(firstPage, /aria-label="Pagination"/);
    assert.match(firstPage, /href="\/blog\/2\/"/);
  });

  it('category and tag archive pages are generated from public post taxonomy', () => {
    const categories = unique(blogPosts().map(post => post.data.category));
    assert.deepEqual(categories, ['career', 'code', 'personal']);

    for (const category of categories) {
      const html = readDist(`blog/category/${category}/index.html`);
      assert.match(html, new RegExp(`Category:${category}`));
      assert.match(html, /All the articles with the category/);
    }

    const tags = unique(
      blogPosts().flatMap(post =>
        Array.isArray(post.data.tags) ? post.data.tags : []
      )
    );
    assert.ok(tags.length > 20, 'historical tag archive has broad coverage');
    assert.ok(tags.includes('talk'), 'talk tag exists for talks page');

    for (const tag of tags) {
      assertDistFile(`blog/tags/${slugifyTag(tag)}/index.html`);
    }

    const tagIndex = readDist('blog/tags/index.html');
    assert.match(tagIndex, /All the tags used in posts/);
  });

  it('search page exposes a client-side article search surface', () => {
    const html = readDist('search/index.html');

    assert.match(titleFromHtml(html), /Search \| Harry Wolff/);
    assert.match(html, /Search any article/);
    assert.match(html, /SearchBar/);
    assert.match(html, /client/);
  });

  it('RSS, robots, and sitemap keep the site discoverable', () => {
    const rss = readDist('rss.xml');
    assert.match(rss, /<rss/);
    assert.match(rss, /<channel>/);
    assert.match(rss, /<title>Harry Wolff<\/title>/);
    assert.match(rss, /<item>/);
    assert.match(rss, /What Vue\.js Does Better Than React/);

    const robots = readDist('robots.txt');
    assert.match(robots, /User-agent: \*/);
    assert.match(robots, /Allow: \//);
    assert.match(robots, /Sitemap: https:\/\/hswolff\.com\/sitemap-index\.xml/);

    const sitemap = readDist('sitemap-index.xml');
    assert.match(sitemap, /<sitemapindex/);
    assert.match(sitemap, /https:\/\/hswolff\.com\/sitemap-0\.xml/);
  });

  it('Dough Maker product and privacy page remains independently complete', () => {
    const html = readDist('dough-maker/index.html');

    assert.match(titleFromHtml(html), /Dough Maker/);
    assert.match(html, /Download on the App Store/);
    assert.match(html, /dough-maker-support@hswolff\.com/);
    assert.match(html, /Privacy Policy/);
    assert.match(html, /Last updated: March 9, 2026/);
    assert.match(html, /Baker/);
    assert.match(html, /SoftwareApplication/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /\/images\/dough-maker-icon\.png/);
  });

  it('static secondary pages preserve their primary content contracts', () => {
    const about = readDist('about/index.html');
    assert.match(about, /This page is all about me/);
    assert.match(about, /MongoDB/);

    const projects = readDist('projects/index.html');
    assert.match(projects, /YouTube/);
    assert.match(projects, /Open Source/);
    assert.match(projects, /The Console Log/);

    const uses = readDist('uses/index.html');
    assert.match(uses, /Last updated:/);
    assert.match(uses, /Visual Studio Code/);
    assert.match(uses, /Video Tour/);

    const contact = readDist('about/contact/index.html');
    assert.match(contact, /Want to get in touch/);
    assert.match(contact, /form-name/);

    const talks = readDist('about/talks/index.html');
    assert.match(talks, /talk at a couple of conferences and Meetups/);

    const newsletter = readDist('newsletter/index.html');
    assert.match(newsletter, /newsletter/);
    assert.match(newsletter, /weekly update/);
  });
});
