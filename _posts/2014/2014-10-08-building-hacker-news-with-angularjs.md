---
title: Building Hacker News With Angularjs
slug: building-hacker-news-with-angularjs
date: 2014-10-09T01:39:53.069Z
updated: 2014-10-17T18:53:43.439Z
tags:
- angularjs
- code
- github
---

This week [Hacker News announced its official API](http://blog.ycombinator.com/hacker-news-api).  This is really great news.  Prior to this official API all 3rd-party apps resorted to scraping the website to as their data source, a brittle and unscalable practice.  This new API provides a standard and efficient way to create 3rd-party Hacker News applications.

Last night I decided to try out this new API.  I randomly decided to sprint and see how quickly I could create an exact clone of Hacker News using [angularjs](https://angularjs.org/).  Turns out it took me almost exactly 2 hours to do.  Pretty damn impressed with myself.

To cut to the chase, find the demo url here: http://hswolff.github.io/hn-ng/
And the source code here: https://github.com/hswolff/hn-ng

## How Was This Made?

I started the project via scaffolding through [Yeoman's]()http://yeoman.io/ [gulp-webapp generator](https://github.com/yeoman/generator-gulp-webapp).  This saved me a lot of initial work, as it created all the rote files I would have otherwise had to create and saved me the trouble of finding one of my old gulp files to copy over.

After that I added angularjs to my bower file:

`bower install --save angularjs`

And then used the magic of one of Yeoman's default tasks, `gulp wiredep` to automatically inject those new bower files into my `index.html` file.

I did hit a struggling point when it came to compiling my angular application.  As angular dev's are aware, there are some issues surrounding [minification](https://docs.angularjs.org/tutorial/step_05).  To surmount this I grabbed the [gulp-ng-annotate](https://github.com/Kagami/gulp-ng-annotate) plugin which handles adding all required annotations to your code.

There was also the issue of pre-warming my template cache.  To solve this I used [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache), which allows you to pre-warm your `$templateCache` to not require any AJAX calls in production.

After solving those two hiccups everything was smooth sailing.  I sprinted through the [controller that handles the homepage](https://github.com/hswolff/hn-ng/blob/master/app/scripts/controllers/homepage.js) and was just racing against myself.

All-in-all a wonderful exercise.  I hope as the official Hacker News API expands I can also expand my clone, and maybe add some of my own personal enhancements to it.  For now I hope you enjoy the code!
