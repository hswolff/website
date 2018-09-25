---
title: The Modern Front-end Workflow - From Start to Finish
slug: the-modern-front-end-workflow-from-start-to-finish
date: 2014-01-30T18:00:00.000Z
updated: 2014-02-28T14:55:44.185Z
tags:
- front-end
- guide
- code
---

Front-end engineers have gone through a bit of a renaissance in recent years.

There's been a wild and wonderful spurt in innovation that has completely changed what it means to be a front-end developer.

We now have a vast and wide array of tools available to us, allowing us to develop faster and smarter.

We now can push the limits of what a modern web browser can do, accomplishing things that two years ago seemed impossible.

Bottom line, right now is an amazing time to be a front-end developer.


## Start
![Start](/images/posts/2014/Jan/modern_frontend_start.jpg)
[Source](http://www.flickr.com/photos/takkaria/2520731995/)

Today there is almost zero friction to getting set up with a new project.  Everything that you need to get started is only a few key strokes away thanks to some powerful new tools.

[Git](http://git-scm.com/) is the version control system of choice for most developers nowadays.  It makes sharing code easy and frictionless.  When you want to get going on a new code base you only have to run the simple git command of `git clone` and all the code and all of its history is downloaded directly to your computer.

[NPM](https://npmjs.org/) is the [node](http://nodejs.org/) package manager.  It allows developers to package their nodejs code a self contained module and then share it with the community.  There are npm packages that provide almost every type of functionality you can imagine, allowing you to leverage the work of the community.  Each new project has their own unique set of dependencies they require for them to work.  To get all these dependencies installed locally you only need to run `npm install`, which downloads and installs everything you need.

[Bower](http://bower.io/) is a package manager for third-party web libraries.  Historically if your project requires [jQuery](http://jquery.com/) be included you would have to navigate to the jQuery website, download the file, extract it, and move it into your project.  Bower simplifies that process by giving you the command `bower install` which handles getting jQuery into your project.

## Development
![Development](/images/posts/2014/Jan/modern_frontend_develop.jpg)
[Source](http://commons.wikimedia.org/wiki/File:EPA_GULF_BREEZE_LABORATORY,_CHEMISTRY_LAB._THE_CHEMIST_IS_TESTING_WATER_SAMPLES_FOR_PESTICIDES_-_NARA_-_546277.jpg)

Actually coding and developing your project is where most time is spent.  Nowadays this is one of the most enjoyable parts due to the many wonderful tools available. These tools make dev'ing so smooth that I'd dare say it makes it fun.  Scratch that - it makes it oodles of fun.

[GruntJS](http://gruntjs.com/) is the most popular task runner amongst front-end developers.  There's already a huge community of grunt plugin authors that to date have written over 2,000 Grunt plugins, all of which are immediately ready for your use.   Grunt allows you to automate rote tasks without breaking a sweat.  For example if you need to compress all your jpg, gif, and png files you can use the [imagemin grunt task](https://npmjs.org/package/grunt-contrib-imagemin) .

CSS Preprocessors like [LESS](http://lesscss.org/), [Sass](http://sass-lang.com/),  or [Stylus](http://learnboost.github.io/stylus/) have made it easy to architect maintainable, extendable, and modular CSS.  Among the many features that CSS preprocessors provide the two of most value are without a doubt [nested selectors](http://www.lesscss.org/#-nested-rules) and [variables](http://www.lesscss.org/#-variables).  Having the ability to define a color variable in one location and use it throughout allows for a flexibility in CSS that did not previously exist, yet one that was sorely needed.

[LiveReload](http://livereload.com/) changes the way you develop, as it brings a fluidity to your development flow that you didn't realize you needed.  Whenever you change a file that you're working on LiveReload will notice that it changed and refresh your browsers so that you can immediately see your changes in place.  No longer do you have to save a file, switch to the browser, and then refresh the page.  With live reload after you save a file the browser will refresh itself, saving you time and grief.


## Review
![Review](/images/posts/2014/Jan/modern_frontend_review.jpg)
[Source](http://www.flickr.com/photos/awcole72/5826659567/)

When you're ready to push some of your code into the wild it's always a good idea to review it with your team and run it through some code quality and style tools.

 [A GitHub Pull Request](https://help.github.com/articles/using-pull-requests) is one of the handiest ways that you can rally your team around vetting your changes.  After opening a pull request you're given a page that allows you to clearly state what you changed along with a view that shows the changes you made.  Coupled with a robust comment system, a GitHub pull request makes it easy for your team to review and give feedback on changes.

[JSHint](http://www.jshint.com/) is a tool that programmatically finds errors in your code.  It'll prompt you if you have a function with two arguments, and the second argument is never used, or if you're missing a semicolon where one should be.  All these things ensure your code is in good shape, allowing your teammates to focus on other things that aren't as nit-picky as JSHint.

[JSCS](https://github.com/mdevils/node-jscs) is another tool that is great to have in your repertoire.  JSCS is a JavaScript [code style](http://coding.smashingmagazine.com/2012/10/25/why-coding-style-matters/) checker, focusing on the style of your code and not the quality.  You define what code styles you want and when you run your code through JSCS it'll alert you if there are any areas of your code that are not inline with your project's expectations.


## Deploy
![Deploy](/images/posts/2014/Jan/modern_frontend_deploy.jpg)
[Source](http://www.flickr.com/photos/boston_public_library/6323966056/)

Getting your code from your computer out into the world is the best part of development, as it's when you get to share all your work with the world at large.

[Continuous integration](http://www.thoughtworks.com/continuous-integration) is a practice that enables and encourages getting your code to production frequently and without fear of breaking anything.  A CI server will automatically perform tests across all products, not just the ones you touched.  If any tests fail alerts are sent out and any changes to production are halted, preventing regressions from reaching production.  When all tests pass your changes are merged into the production ready branch, assets compiled, and production is updated.

This makes the entire process of getting your changes live easy, effortless, and safe.  You can view the progress of the CI server as it chugs along, letting you be kept in the loop of what's going on without having to push the process along yourself.


## Summary

The life of a front-end developer has never been easier.  Browsers are getting better every day, and the tools we have at our disposal have never been better.

No longer are we wallowing in the shadow of legacy browsers, but we're barreling ahead to stretch what's possible in the browser.

The processes outlined above lets you worry less about minutiae and just focus on development and the product.

The life of a front-end developer is pretty damn good.

*Also posted on [Chartbeat's blog](http://blog.chartbeat.com/2014/01/30/modern-front-end-workflow-start-finish/)*

