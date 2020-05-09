const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Gatsby uses it, so I use it.
const GithubSlugger = require('github-slugger');
const slugger = new GithubSlugger();

function promptForInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function prompt(resolve) {
    rl.question(question, (answer) => {
      if (!answer) {
        return prompt(resolve);
      }

      rl.close();

      resolve(answer);
    });
  }

  return new Promise(prompt);
}

function writeNewFile({ title, category }) {
  const slug = slugger.slug(title.toLowerCase());

  // Get date as YYYY-MM-DD
  const date = new Date().toISOString().split('T')[0];
  const [dateYear] = date.split('-');
  const postPath = `./_posts/${dateYear}`;
  const postFilename = `${date}-${slug}.md`;

  if (!fs.existsSync(postPath)) {
    fs.mkdirSync(postPath);
  }

  fs.writeFileSync(
    path.join(postPath, postFilename),
    `---
title: ${title}
slug: ${slug}
date: ${date}
category: ${category}
tags:
---
`
  );

  process.stdout.write(`\n"${title}" was created!\n`);
}

(async () => {
  let title = process.argv[2];
  if (!title) {
    title = await promptForInput('Please provide a blog post title: ');
  }

  const validCategories = ['code', 'personal', 'career'];
  let category;
  while (category == null) {
    category = await promptForInput(
      `Please provide a category (${validCategories.join(', ')}): `
    );
    if (!validCategories.includes(category)) {
      category = null;
    }
  }

  writeNewFile({ title, category });
})();
