---
title: Introducing Yarn
slug: introducing-yarn
date: 2016-04-10T21:34:46.217Z
tags:
- yarn
- open-source
- github
---

#### *Note! Yarn has been renamed to [Reptar](/blog/introducing-reptar/)*

Hello everyone! I want to introduce you to my newest creation, [Yarn](http://yarnjs.github.io/)!

Yarn is a static site generator that I wrote. It was built due to my frustrations with the current static site generators available. I figured, "Hey, it can't be that hard to write my own static site generator!" So I started working on Yarn. Seven months later and I'm now proud to introduce the first stable version of Yarn, 1.0.0.

[![Yarn](/images/posts/2016/04/yarn-300.png)](http://yarnjs.github.io/)

If I had known it would take me over half a year to complete this project I probably wouldn't have even bothered, but that's the benefit of forgoing thorough forethought.

This [blog is now proudly created with Yarn](https://github.com/hswolff/blog) as well!

Why did I even want to start using a static site generator? To answer that I have to take you back to 2010.

_And if you're just curious about hearing about Yarn then scroll down to the Yarn section_

## The Beginning

[Back in 2010](http://hswolff.com/blog/hello-world/) I started blogging. I thought it would be a good way to build my brand as well as give myself a creative outlet. I was coding most of the time during my day job, but I very much enjoy writing, and wanted to have somewhere to put my words. So my blog began.

In 2010 the de facto way to blog was with [WordPress](http://wordpress.com/). So that's what I started out on. I set up my own self-hosted WordPress installation and went on my merry way.

For three years I was fine blogging with WordPress. It was easy to use, easy to maintain. I had no real complaints.

Except at some point in 2014 I started getting bored of WordPress. Not only bored but a little annoyed at the sluggishness of the WordPress admin. Also I didn't enjoy having to delve into PHP to make any meaningful change to how my blog worked. Making a new theme required learning the WordPress template language, something that I did not want to bother with.

So I decided I need a change.

## A Ghoulish Diversion

As luck would have it [Ghost](https://ghost.org/) had just come onto the scene. It billed itself as a streamlined WordPress, focused only on blogging. And the best part? It was written in Node.js. Hallelujah!

So I [ported my blog](http://hswolff.com/blog/why-i-switched-my-blog-to-ghost/) to Ghost. And for a year I used Ghost to run my blog.

I also began contributing to the Ghost project. I was a core contributor to the project for around six months, lending my hand to improve Ghost in any way that I could.

Ghost was harder to deploy than WordPress as it is a Node.js application. I didn't have much experience deploying Node.js applications so I had to learn. It wasn't terrible, but it was definitely an adoption cost that I hadn't expected.

Everything was going well. Until one day when it wasn't.

Upgrading Ghost was a mild chore. I wasn't using Ghost in the #blessed manner and as such had an extra cost whenever I had to upgrade. Sometimes my Ghost process had a memory leak that would cause my hosting provider to kill the process to prevent it from affecting the shared host it was on.

Also at some point I stopped contributing to the Ghost project.

All these things combined pushed me to migrate away from Ghost.

## Static Electricity

After Ghost I finally told myself that enough was enough and that it was time to pare my blog down to its barest essentials.

That's right. It was time to go [static site generator](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/).

Being a JavaScript man I looked at what static site generators were written in JavaScript.

I eventually ended up going with [metalsmith](http://www.metalsmith.io/). I liked its minimalistic approach and its customizability.

However when I sat down to actually port my Ghost (which was ported from WordPress) blog to metalsmith I found myself needing to turn to the myriad of metalsmith plug-ins. To get my metalsmith blog to feature parity with my Ghost blog I had to write [a mountain of configuration.](https://github.com/hswolff/blog/blob/metalsmith/gulpfile.js#L97-L226)

So I got it working, and it was good, but holy shit was that a lot of work.

I thought to myself, "Surely there's something better?"

## Do It Yourself

I found that mountain of configuration quite brittle. Sometimes my blog wouldn't compile for reasons that I never cared enough to track down. I knew that I needed to move (again!) to something new.

The most popular static site generator written in JavaScript (remember: I'm a JS dev!) is [hexo](http://hexo.io/). And while it's certainly mature and powerful it didn't provide all the features that I wanted my blog to have. Primarily I wanted easy pagination support and support for tag pages.

Even when I looked at [Jekyll](http://jekyllrb.com/) it didn't provide the features I wanted. If I wanted that functionality I either had to hack in support or turn to a plug-in.

At this point I thought, "Enough is enough." And so, Yarn was born.

## Yarn

Yarn was created to have feature parity with Ghost, which had feature parity with (the blogging aspect) of WordPress. The only twist was that Yarn would be a static site generator. No need to run a server process or have to worry about maintaining a node.js application on your web host.

All you needed was the ability to `rsync` your compiled code, and you'd be good to go!

Yarn has built-in support for pagination of files, along with support for tag pages. It's capable of this behavior due to sensible primitive constructs.

The basic building block of [Yarn is that of collections](http://yarnjs.github.io/docs/collections/). Yarn inspects your local files and organizes them into collections based upon either their location in the file system or the meta data that is contained in the file.

Through this simple abstraction Yarn is able to derive a great deal of information. It allows Yarn to be expressive and flexible as all it needs is to be told how to construct its collections.

Also Yarn was built using the latest JavaScript specification, specifically ES2015+. While I could lie and say this was to move the JavaScript community forward I would be lying. I enjoy writing ES2015+ JavaScript. It's more pleasurable to write JavaScript that way and it allows for more expressive and easier to understand code.

Yarn was also built to be easy to build upon. I'm hoping contributors present themselves and provide a strong future for Yarn.

## The Future

I'm very proud to have shipped a version 1.0.0. I struggled about when to push Yarn to 1.0.0 as I still have many ideas on what Yarn should be able to do. It was hard deciding when to pull the trigger and declare Yarn feature complete and ready for an initial release.

I want to add API to Yarn to allow for the creation of a dashboard to administer a Yarn site. I'd like to see more collection types added to Yarn. There's so much more I want to do!

But at some point you have to stop yourself and just be ok with what you have.

I'm very proud of how far Yarn has come since its beginning. I hope the community finds it worthwhile and fun to hack on. And I can't wait for my first dedicated contributor.

I hope you enjoy Yarn. Here's to 1.0.0 and many more versions to come!
