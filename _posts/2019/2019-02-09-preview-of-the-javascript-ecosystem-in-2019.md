---
title: Preview of the JavaScript Ecosystem in 2019
slug: preview-of-the-javascript-ecosystem-in-2019
date: 2019-02-09
category: code
tags:
---

I’m not really in the business of telling the future however I do think it would be fun to mirror all of my [year](/blog/javascript-year-in-review-2018/) in [review](/blog/react-year-in-review-2018/) posts with one that looks forward to the year to come.

There’s a lot of new things I’m very excited about this coming year. I don’t know when I’ll be able to lay my grubby hands onto all these new shiny things but I can tell you that I’m practically drooling at all the exciting new things that are coming in 2019.

There’s a whole range of new things happening this year. From JavaScript frameworks, to CSS advancements, to general ecosystem trends. All of them are exciting and further proof that there’s no better time to be a JavaScript developer than today.

What follows is a preview of things to look forward to in 2019.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/et_1NoEvVww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

# React

Every year I think that React has peaked and every year I’m proven wrong. 2019 is shaping up to be one of the most monumental years of React since the deprecation of [React.createClass](https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactcreateclass) in favor of classes.

How is React going to disrupt classes? By going to functions of course. That’s why [React Hooks](https://reactjs.org/docs/hooks-intro.html) are such a big deal. While the React team has no current plans to deprecate classes, by introducing Hooks they are laying the groundwork to enable a future where React is no longer dependent on class Components. It’s kinda wild to see this full circle of changes coming to fruition. From a JS object, to class, to function. Maybe next year the React team will migrate from functions to using RegEx’s as how a component is defined (that’s a joke, to be clear).

The React team laid out their [roadmap for upcoming React features in 16.x](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html) and the entire post is worth a read. There’s large changes coming, all of which is going to vastly change (for the better!) the way people write their applications.

The biggest one I’m excited about is [Suspense for Data Fetching](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html#react-16x-mid-2019-the-one-with-suspense-for-data-fetching). This feature solves a long-standing hole in functionality that Redux tried to solve many years ago. It answers the question of “How do I load async data in React and make it accessible throughout my entire application as easy as possible?” Suspense for Data fetching answers that question and provides a solution that is as clever as it is naughty. You may have heard stories about how React is throwing Promises…well that’s to achieve the goals in this feature.

# Vue.js 3.0

I don’t personally use Vue.js however I admire the framework and the smart work that has been put into making it accessible to all skill levels while also being as flexible as possible.

[The Vue.js team is kicking it up a notch this year with Vue.js 3.0](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf). This blog post is all the details I currently know about Vue 3.0, however if all the promises are delivered then Vue 3.0 is going to be one incredible framework.

One of the big things I love about Vue.js is they unabashedly incorporate the best ideas from peer frameworks into Vue.js in a way that feels natural to a Vue.js engineer. Vue 3.0 seems to be continuing this great tradition but kicking it up a notch.

When Vue.js 3.0 is released I’m going to play with it immediately. It sounds very exciting and I love seeing how different people solve the same problem. That problem being: how do you make UI development easier? Vue.js has its eye on the prize.

# CSS

Welcome to the unsung hero of the internet, CSS. I predict big things for CSS in 2019.

The first is the continued growth and usage of **CSS in JS**, led in large part by [styled-components](https://www.styled-components.com/) and [emotion.sh](https://emotion.sh/). I honestly never tire of the Twitter debates about the merits of CSS in JS (it’s nuanced!) but I do predict continued momentum for CSS-in-JS usage. Why? They solve a pain point that vanilla CSS has no current solution for. Namely the C in CSS. That cascade is hard to wrangle, especially amongst a large team. CSS-in-JS is the cascade-wrangler.

If you follow my [YouTube videos](https://www.youtube.com/user/hswolff) you’ll know that I’m long been very excited about [CSS Houdini.](https://developers.google.com/web/updates/2016/05/houdini) The easiest way to explain it is that it is what Babel is to JavaScript - a way to allow developers to use advanced CSS features today. It does this via creating new APIs that let UI engineers control and alter how CSS behaves on your page.

CSS Houdini is itself a project that encompasses many different APIs. One of them, the one I’m most excited about, is called the [Layout API](https://github.com/w3c/css-houdini-drafts/blob/master/css-layout-api/EXPLAINER.md). The Layout API exposes API methods that allows developers to customize how content is laid out on the page. You know how we have `display: block` and `display: flex`? The Layout API lets you create your own custom `display: magic` and you define its behavior. Very very exciting stuff.

Last piece of CSS prediction is that 2019 will finally be the year that CSS Grids take off. It’s been a couple of years that CSS Grid has been available and the browsers that support CSS Grid have now had a chance to spread across the internet. Such that, this is the year where it finally becomes safe and exciting to start using CSS Grid in production. I myself need to learn more about it as it’s a very exciting piece of technology. If you only support evergreen browsers and not IE then CSS Grids is ready for the big time!

# Webpack 5

Seems like Webpack has a major release every year, which is quite the lovely release cadence. This year is no exception with the first [Webpack 5 Alpha already released](https://github.com/webpack/webpack/issues/8537) and feedback is being solicited.

The marquee feature in Webpack 5 is persistent caching, a feature I’ve long been excited about. The gist of this feature is now, when you kill Webpack and start it back up, it won’t have to restart all of its work. It can pick up where it left off as it saves its state to disk, ready to be used next time.

Also it’s great to see such a depended on piece of technology be even and measured with their release cadence. If we had a new Webpack version every month I don’t think that would be good for the wider JavaScript ecosystem at all.

# TypeScript

TypeScript’s popularity has started to seriously increase in the past couple of months. In particular, January 2019 seemed to be the month of TypeScript - it was all that people seemed to be talking about.

I predict this to be a big year for TypeScript as we see it continue to assert its dominance as the defacto language to use if you want types in JavaScript. Flow squandered any competitive advantage they had by not being good open source participants, leaving the door wide open for TypeScript to take the lead.

What’s great about an increase in TypeScript popularity is how it’ll have a knock on effect for VSCode. VSCode (my editor of choice, my editor of love) derives a lot of its functionality from leveraging TypeScript under the hood. As TypeScript continues to grow and mature it’ll simply make VSCode better as well.

I expect VSCode to grow its feature set, racing for feature parity with a typical IDE however never lose its text editor feel. That’s the combo that I yearn for. Simple feel of a text editor with all the bells and whistles of a fancy IDE. I think VSCode has a great shot to obtain that complex middle ground, and this year will see great growth toward that end.

# ReasonML

ReasonML is another compile to JavaScript language, albeit one that is a little less familiar than TypeScript. It’s a language derived from OCaml that through the ingenuity of a project called BuckleScript can compile ReasonML code into JavaScript code.

It’s still very much early days for ReasonML, with 2018 being a steady year of growth for early adopters. 2019 might prove to be a bigger year for ReasonML, albeit one that isn’t explosive. It’s still a niche, but one that I predict will have some respectable growth.

The bigger story to me with ReasonML is how it can compile to native code. ReasonML is built on top of OCaml, which already can compile to native code, and there’s already some very exciting projects that are in the works. Also due to ReasonML’s syntax trying to mirror JavaScript as close as possible, it makes for a potentially very powerful combination. One such project is called Revery, which is trying to fashion itself an Electron toolkit - I.e write ReasonML code and then create a native app. Very exciting things.

# Node

2019 is going to be a turning point for Node. Two big things are brewing for Node.

The first is native ES Modules support. There’s currently support for ES Modules in Node behind a feature flag and requiring a file extension of `.mjs`. I’m not the biggest fan of this restriction and there’s many in the community who feel the same way. I hope that this year Node is able to make solid progress on its ES Modules story, paving the way for stronger unification of Node and JavaScript. I’m not very hopeful it’ll happen in 2019, as there’s a lot to consider and work through, but I anticipate good progress to be made in 2019.

Another very interesting trend I predict happening in 2019 is multi threaded Node applications. [Worker Threads](https://nodejs.org/api/worker_threads.html) is a brand new module available in Node 11, and once it makes it way to Node 12 (a LTS release) I can’t wait for the first multi-threaded Node app to be released.

Historically Node apps have been good for non-CPU bound use cases. This is due to the JS run time loop and not having any way to offload CPU intensive tasks to a separate worker thread. Well with this new module that is no longer the case - we’ll be able to easily spin out a new thread to take care of whatever task we need.

This small addition is going to have a large ripple effect across the Node ecosystem, opening up a whole new range of applications. I’m very excited about it.

To round out this Node prediction section I want to mention an upcoming project named [Deno](https://deno.land/). Created by Ryan Dahl, the original creator of Node.js, Deno is in many ways his second attempt at a server-side JavaScript runtime.

Deno has TypeScript built in and ES Modules built in. It has a different approach towards handling dependencies, and it’s written in Rust. It’s a project I have my eye on, and I’m very curious if its popularity will grow.

Node is so entrenched at this point that I find it very doubtful that Deno could supersede Node, but competition is always good. Maybe it’ll force Node to gets its ES Modules story figured out.

# npm & Yarn

2019 is going to be the year of the package manager revolution. Both npm and Yarn have huge plans on how to take their projects to the next level and they’re both very exciting.

npm is working on [Tink](https://github.com/npm/tink), a reimagined approach to how dependencies are installed. The high level thought is that instead of re-installing the same package in all your applications and putting it into separate `node_modules` folders, Tink aims to have a global cache and link up those packages and versions into the `node_modules` folder of your application. This has the aim to drastically improve installation speed and decrease the size of your `node_modules` folder.

[Yarn recently laid out their 2.0 roadmap](https://github.com/yarnpkg/yarn/issues/6953) and it’s audacious, to say the least. Yarn seems to want to become a package manager platform, with enough flexibility to support installing packages across languages, not exclusive to JavaScript. Imagine installing dependencies with Yarn for a PHP app. Wild!

These two plans predict big things for package management in the JavaScript in 2019. I can’t wait to start playing with these two things. I can only imagine the amazing lift in developer productivity they’ll bring.

# GitHub

Here’s an interesting one for you - I predict that Microsoft’s purchase of GitHub is going to be a huge boon to the development and feature of GitHub.

The purchase of GitHub has blessed them with one amazing gift: no longer having to worry about how to make money. Now that Microsoft has removed the need for GitHub to internally find how to become profitable, GitHub can instead focus on what it does best: product.

We’re already seeing this bear fruit with small UI and UX tweaks in the past few months. The sticky bar on PR review pages, new dashboard page. I’m sure these were under development before the Microsoft purchase, however now there’s less that GitHub has to juggle.

GitHub is going to get great in 2019.

# Conclusion

So that wraps my predictions for the JavaScript ecosystem in 2019. It’s never been a better time to be a JavaScript developer, and it’s just going to get better.

It’s also exciting to see the ecosystem mature. Modern Javascript is relatively young compared to other more mature ecosystems (have you seen what a Java IDE can do? Woah!) and now that the initial rush of understanding how powerful JavaScript can be is slowing, we can now focus on making JavaScript more approachable and sustainable.
