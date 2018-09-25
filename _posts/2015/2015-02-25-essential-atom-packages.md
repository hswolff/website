---
title: Essential Atom Packages
slug: essential-atom-packages
date: 2015-02-25T04:30:16.059Z
updated: 2015-02-25T04:30:16.059Z
tags:
- atom
- programming
- editor
- tutorial
- guide
---

[Atom](https://atom.io/) is a hackable code editor from the fine folks at GitHub. It's written entirely in JavaScript (specifically CoffeeScript) and runs in a self contained Chromium environment. It's new and young, yet slowly growing in popularity and features.

After using Sublime Text for the past three years I found myself experiencing some growing pains. ST doesn't seem to be actively maintained, communications with its sole developer are non-existent and intermittent. The package community, while large, isn't holistic. Packages support isn't built into ST and as such I've had some unsatisfactory experiences. I've had packages randomly break, either from updates or installing a new package that conflicts with already installed packages. Sometimes packages just never work, or require obscure settings with non-existent documentation.

And if I'm being completely honest ST just isn't exciting anymore. I'm bored and Atom presents a welcome change.

I've been using Atom as my primary editor for the past month. Overall I've been very happy with my experience. I tried using Atom when it was first released but found it completely unusable as my primary editor. It was slow and its feature set (compared to ST) was woefully inadequate. Since then it's come a long way. While it's still missing some features in its core set of packages, I was able to find a community package that filled my need.

The one true point where Atom is truly lacking compared to ST is in the time it takes from opening the application and being able to code. I know that is a focus of the Atom team, and for now it's tolerable. I'm definitely looking forward to all future speed increases.

So in the vein of my previous post on [my favorite Sublime Text packages](/my-favorite-sublime-text-2-plugins-aka-packages/). I present to you this follow up. My favorite and essential Atom packages.  


---


## [save-session](https://github.com/mpeterson2/save-session)

Without this package I would not have been able to switch to Atom. This package brings to Atom the most excellent feature of Sublime Text wherein you can have an un-saved file open, quit, re-open Atom, and find that file just as you left it, completely unchanged.

I can't begin to tell you how many times this feature has saved my ass. I no longer have to worry about not saving a file if my computer freezes - I know I'm saved.

It also acts as a wonderful light-weight scratch pad. Just open a new tab, jot down some notes and keep it open for as long as you need that information. Quit Atom, restart your computer, that file isn't going anywhere until you explicitly close that tab.

A must have.


## [project-manager](https://github.com/danielbrodin/atom-project-manager)

![](/images/posts/2015/02/atom/project-manager.gif)

This package allows you to easily save and switch between projects. It's a real time saver when you're working on multiple projects at once. Rather than having to manually find the folder where the code exists and opening it, you can simply activate the Project Switcher menu via ctrl+cmd+p and easily open an existing project.

This brings Atom to parity with ST's project switcher, so it's a real must have if you use that feature in ST.


## [autocomplete-plus](https://github.com/atom-community/autocomplete-plus)

![](/images/posts/2015/02/atom/autocomplete-plus.gif)

The built-in Atom autocomplete package is a little lame. It isn't eager in its suggestions and doesn't seem to know that much about your code that it's actually helpful.  This package makes autocomplete in Atom much more usable, with plenty more customization, and a better capacity for finding suggestions.

I have one recommendation that in autocomplete-plus' settings you turn on its `Use Strict Matching For Built-In Provider`. This causes the package to more closely match ST's autocomplete, which I find produces better and more reliable results.


## [atom-ternjs](https://github.com/tststs/atom-ternjs)

![](/images/posts/2015/02/atom/ternjs.gif)

[Tern](http://ternjs.net/) is a code-analysis engine for JavaScript. This package brings its analysis to autocomplete-plus, which means even *better* autocomplete suggestions. Not only that it also adds context to your JavaScript code such that you can jump to the definition of a function from its usage, a feature you'd normally only see in full IDEs like IntelliJ. Makes developing much easier and pleasant, a definite performance boost.


## [highlight-line](https://github.com/richrace/highlight-line)

![](/images/posts/2015/02/atom/highlight-line.gif)

Simple plug-in but one that I was sorely missing from ST. It does what it says on the tin: the line you currently have selected is given a highlight so you can easily find your place in your file.

This is a personal preference package, but one I can't live without.


## [highlight-selected](https://github.com/richrace/highlight-selected)

![](/images/posts/2015/02/atom/highlight-selected.gif)

Another personal preference, this package adds the ST feature of highlighting the current word that is selected. So if you were to select the word 'hello' then all other occurrences of the word 'hello' would be highlighted. Makes for much easier navigation through code.


## [linter](https://github.com/AtomLinter/Linter)

![](/images/posts/2015/02/atom/linter.gif)

The essential linter package. Gives you linting feedback in real-time, letting you know when you've written code that doesn't pass your current linter configurations.

This package relies on plug-in packages to be useful, the one I use daily is [linter-jshint](https://github.com/AtomLinter/linter-jshint) but there are [many linters available](https://github.com/AtomLinter/Linter#available-linters).


## [docblockr](https://github.com/nikhilkalige/docblockr)

![](/images/posts/2015/02/atom/docblockr.gif)

A nifty little package that makes it easier to write documentation. Since documentation isn't exactly the most exciting part of the developer workflow I'm always looking to find something to make the task faster and easier. This package helps in both those regards. With it there's almost no excuse to skip documenting your code.


## [Sublime-Style-Column-Selection](https://github.com/bigfive/atom-sublime-select)

![](/images/posts/2015/02/atom/column-selection.gif)

This is another package that brings Atom to parity with ST. With this package you can now hold `alt` while you select text to create multiple cursor selections, allowing you to quickly edit multiple lines from the same same location. It's a little productivity trick I use daily.


## [autoclose-html](https://github.com/mattberkowitz/autoclose-html)

![](/images/posts/2015/02/atom/autoclose-html.gif)

You wrote an opening `<div>` element? This handles automagically creating the ending tag for you. That was easy.


## [emmet](https://github.com/emmetio/emmet-atom)

![](/images/posts/2015/02/atom/emmet.gif)

[Emmet](http://emmet.io/) is a topic for an entire blog post but to make a long story short this package brings Emmet to Atom. Super useful for scaffolding HTML and CSS.

# Listing Your Packages

I wrote a little script to help me get the list of packages I have installed. It's a quick and dirty little node script, but I figured "Hey, I'm a developer. Developer automate their tasks. Let's automate this!"

The script just reads in your Atom packages directory and then prints the name and description from each `package.json` to stdout.

Figured I'd save it incase I had to run it again. Or if you were curious.

```
var fs = require('fs');
var path = require('path');

var atomPackagesPath = path.join(process.env.HOME, '.atom/packages');

fs.readdirSync(atomPackagesPath).forEach(function(current) {
  var packagePath = path.join(atomPackagesPath, current);

  if (fs.statSync(packagePath).isDirectory()) {
    var p = require(packagePath + '/package.json');
    process.stdout.write('[' + p.name + '](' + p.repository.url + ')\n');
    process.stdout.write(p.description + '\n\n');
  }
});
```

# Switch to Atom!

What I love most about Atom is that it encourages you to hack it and make it yours. When I'm less than thrilled with how Atom is behaving I know there's a way to tweak it and make it work just how I desire.

Just the other day I was annoyed at what Atom showed in its title bar. So after a quick search I found the [custom-title](https://github.com/postcasio/custom-title) that allows me to completely customize what is shown. Had I not found that package I know there's an API waiting for me to jump into and use to my hearts content.

I love that Atom is extendable and flexible. It truly can be made into anything you desire, and there's no better time to make the switch than today.

