---
title: Introducing Reptar 2.0.0
slug: introducing-reptar
date: 2016-10-21
tags:
- yarn
- reptar
- static site generator
- javascript
- open-source
- github
---

Introducing Reptar 2.0.0!

It is with great pride that I announce the release Reptar 2.0.0, a static site generator that roars. Install it now!

`npm install -g reptar`

[![Yarn](/images/posts/2016/10/reptar.png)](http://reptar.github.io/)

Now hold on a second, you might be asking yourself, What happened to Reptar 1.0.0? Well Reptar is actually the [static site generator formerly known as Yarn](/blog/introducing-yarn/). Yarn was renamed to Reptar because [another NPM module was recently released](https://yarnpkg.com/) that chose Yarn as its name. It has become wildly popular in a short amount of time, in large thanks to the people and organizations that helped create it. Rather than fight for market or mind share I chose to rename Yarn to the new and ever more rawsome Reptar.

Reptar 2.0.0 comes with a very exciting list of new features and bug fixes.

One of the most exciting new features is the super charged watch mode. Watch mode creates a local web server of your site that is able to reflect any changes you make instantly and without having to rebuild every static file. This is accomplished by lazily rendering only the page that is requested, allowing Reptar to quickly sync with the file system and render the latest changes immediately. This makes for a great workflow when writing a new post or updating your theme - those changes are immediately visible. You can start watch mode via `reptar watch`.

Some other exciting new features:

- Reptar now has `_config.yml` validation. If Reptar notices that you have misconfigured your site it will immediately tell you where and why it is misconfigured.
- Data files are now supported! [This was a requested feature](https://github.com/reptar/reptar/issues/32) and I am happy that Reptar now supports data files of `.yaml` or `json`.

[See the full list of changes in the CHANGELOG.](https://github.com/reptar/reptar/blob/master/CHANGELOG.md#200-2016-10-19)

# Upgrading

If you were using Yarn 1.x then there are two steps required to upgrading to Reptar.

The first is to install Reptar `npm install -g reptar`.

The second is updating your `_config.yml` file as there were breaking changes.

The `_config.yml` validation will tell you what is wrong but it is easier to see the changes by looking at a diff of the changes. Explanations are inline as comments.

```diff
path:
  source:      ./
  destination: ./_site
  plugins:     ./_plugins
  themes:      ./_themes
# Reptar now has support for data files!
+  data:        ./_data

file:
   # Support for File defaults has been added!
   # These are optional settings however it's mostly moving
   # configuration that was on the `collections` field before.
+  defaults:
+    -
+      scope:
+         # Any file in this path will have the default values applied.
+         path: ./
+      values:
+        template: page
+        permalink: /:title/
+    -
+      scope:
+         # Any file in this path will have the default values applied.
+         # Because this path is more specific it will over-write the previous
+         # defaults.
+         path: ./_posts
+      values:
+        template: post
+        permalink: /:title/
+    -
+      scope:
+         # Any file with this matching metadata will have the default values applied.
+         metadata:
+           draft: true
+      values:
+        template: draft
   # Filter settings were moved to under `file`.
+  filters:
+    metadata:
+      draft: true
+    future_date:
+      key: date

collections:
   # These settings are now better handled as a File default.
-  default:
-    path: ./
-    template: page
   # Static collections no longer exist.
-  images:
-    static: true
  post:
    path: ./_posts
     # Moved from being under `pagination`.
+    template: index
     # Moved from being under `pagination`.
+    page_size: 6
     # Permalink is removed.
-    permalink: /:title/
     # Filter is moved to `file`.
-    filter:
-      metadata:
-        draft: true
-      future_date:
-        key: date
     # Renamed.
-    pagination:
+    permalink:
       # Moved up one level.
-      template: index
-      size: 6
       # Renamed
-      permalink_index: /
+      index: /
       # Renamed
-      permalink_page:  /page/:page/
+      page:  /page/:page/

# Moved the follow top level properties to new top level `markdown`.
-markdown_extension:
-  - md
-markdown:    remarkable
-highlighter: highlight.js
-remarkable:
-  preset:       'commonmark'
-  highlight:    true

+markdown:
+  extensions:
+    - md
+  options:
+    preset:       'commonmark'
+    highlight:    true
```

# Thank You

I want to thank everyone for their support of Reptar. It's been so much fun building Reptar and using it daily for my own site.

One of the big new upcoming features I have planned for Reptar is to create an [admin dashboard](https://github.com/reptar/reptar/issues/12) so you can edit your Reptar site as easily as if it was a WordPress site - except it's still a static site! If that sounds exciting and fun then [please join and help code](https://github.com/reptar/reptar/blob/master/CONTRIBUTING.md)!
