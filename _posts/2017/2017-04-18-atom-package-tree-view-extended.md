---
title: "Creating My First Atom Package: tree-view-extended"
date: 2017-04-18
slug: atom-package-tree-view-extended
tags:
- atom
- javascript
---

A little while ago I decided to play with Facebook's [Nuclide](https://nuclide.io/) project. I was curious what enhancements it added to Atom and if any of them would increase my workflow. I found the project altogether nice, bringing in some nice additions to Atom. However it also adds a lot of other functionality that I will never use. So I ended up disabling Nuclide, with the added features not outweighing the other cruft it added.

However there was one feature that Nuclide provides that I found a little hard to live without. They added two pieces of functionality to Atom's [tree-view](https://github.com/atom/tree-view) (the list of files on the left of your editor). The first was it would show another tree-view of all your open tabs in a horizontal list. This I found immensely useful when I had many files open, and my tabs started overflowing my editor. Browsing the list of files in a list was vastly easier.

The second feature was another tree-view that lists all your files that are under version control that are modified. This makes for a great overview of all the files that you're editing, helping you skip around your git working tree to see all the changes that are going into your next commit.

Since I missed these features so much I took the plunge and created my first Atom package, [tree-view-extended](https://atom.io/packages/tree-view-extended).

### Introducing [tree-view-extended](https://atom.io/packages/tree-view-extended)

[![](/images/posts/2017/tree-view-extended.png)](https://atom.io/packages/tree-view-extended)

This package adds both of the features that Nuclide provides without the extra weight of Nuclide. You can add a list of all your open files and a list of all your git modified files.

---

Since this was my first time making an Atom package I had to start at the very beginning (a very good place to start). I started off reading the [Atom Flight Manual](http://flight-manual.atom.io/) to get an overview of how Atom works and how packages interact with Atom.

I found the information presented in the manual to be clearly written and easy to follow. Where I ran into real problems was after finishing the manual. I wasn't really clear on what to do next. I was able to do everything the manual laid out but after that I had to start diving into the [Atom API documentation](https://atom.io/docs/api/AtomEnvironment) and start poking around. I had to hunt and peck to see if what I wanted to accomplish was exposed by the API.

This was hard because API documentation is dry and only presents the discrete information that you're looking up. It doesn't provide any examples or how things interact with one another.

To solve that issue I looked at projects that were already doing things similar to what I wanted to accomplish. This was the real trick I used to figure out how to create my Atom package. I looked at the [tree-view-open-files](https://github.com/postcasio/tree-view-open-files) package and the [tree-view-git-modified](https://github.com/rjaviervega/tree-view-git-modified) package to see what they were doing.

I learn best by example and having these two projects to base my package on were invaluable. It would have taken 10 times as long without having these projects to reference, and I doubt I would have persevered.

---

Another thing I found difficult about developing an Atom package was the development experience. It's not nearly as pleasant as creating a web app.

Setting up my environment to develop the package was not intuitive.

As far as I could tell I had to symlink my development folder into Atom's package folder via `apm link`. This makes it so that my package is loaded into Atom, however the source folder is pointed to my own project.

The second pain point was that I had to refresh Atom every time I wanted to see my changes. I'm used to that from web development, however it takes a solid ~5 seconds for my Atom editor to reload (I may have too many packages installed). That lag of 5s to see any change was exhausting. It made the entire experience altogether unpleasant.

In fact it's that fact alone that largely dissuades me from continuing development on the Atom package. The development experience is highly unpleasant.

---

I'm happy to have created an Atom package that I and others are getting value from. It was a fun little side project to hack on in a weekend.

In point of fact I'd love for this to be merged upstream into tree-view as I think this is a worthwhile feature that would benefit the community at large. Until that happens we have this package.

For me, that's the magic of Atom. If it doesn't do what you want you can change it. So I did.