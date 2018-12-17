---
title: JavaScript Year in Review 2018
slug: javascript-year-in-review-2018
date: 2018-12-16
category: code
tags:
  - javascript
---

Well that's it! 2018 is coming to a close! What a year it's been, eh? A lot of highs...maybe a few more lows than I wanted. However your year turned out I know we can all agree that it was another great year for JavaScript.

There's a lot of 2018 recap posts and I would be remiss not to add my own into the mix. However for my 2018 recap I want to focus on some of the big JavaScript news and releases this past year.

It was fun compiling this list. It had more than a few surprises. Mostly I was surprised at the even pace of new releases. Usually JavaScript gets a bad rep from moving too fast. However in looking at what happened in the past year I wouldn't say that is true at all. It's refreshing to see libraries that are heavily depended on take that responsibility seriously and be very careful in the cadence of their releases.

There were also some great releases! Some libraries made some great improvements in the past year, making my life as a developer better and happier.

With all that being said, let's get to reminiscing!

If you're interested in watching this in video form I got you covered! Check out my YouTube video which is me telling you about the past year of releases rather than you doing the work and having to read all the following words.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/Ei_IJbZdPvA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

# January

### [Prettier 1.10](https://prettier.io/blog/2018/01/10/1.10.0.html)

Prettier, everyone's favorite JavaScript code formatter, started the year with their 1.10 release. This release introduced the Prettier plugin API allowing 3rd party devs to extend the functionality of Prettier.

There were a couple of releases of Prettier this past year, culminating in 1.15, but you'll read more about that in November.

### [Bootstrap 4 Released](http://blog.getbootstrap.com/2018/01/18/bootstrap-4/)

Big release from the Bootstrap team! One thing I love about Bootstrap is how careful they are with their upgrades. The amount of effort and care they put into every release is immense, and Bootstrap 4 was no exception.

### [TC39 now has an official logo](https://github.com/tc39/logo)

TC39 has a logo! I think I was more excited about this than most people but what's not to get excited about? An official logo for the team that decides the future of JavaScript? Hell yeah they deserve their own logo.

### [Immer goes 1.0.0](https://github.com/mweststrate/immer/releases/tag/1.0.0)

Feels like Immer has been around forever at this point, but it was only in January that it went stable at version 1.0.0. I personally love Immer - it makes an otherwise cumbersome task (immutablitity) easy. So many other libraries either directly build on top of Immer or use its novel concept to inform their own APIs. What a great addition to the JavaScript landscape.

### [Service Worker Support Added to Safari in iOS 11.3](https://webkit.org/blog/8084/release-notes-for-safari-technology-preview-48/)

Finally, I can invest some of my team to learning and implementing Service Workers! Mobile Safari support was the last main blocker for me, and that blocker was erased in January. It's now been a year of widespread support for Service Workers across modern browsers on the desktop and on mobile. No more excuses! Get Servicing! Workers!

# February

### [Ember 3.0 Released](https://emberjs.com/blog/2018/02/14/ember-3-0-released.html)

Major release of the Ember framework. They always do such a good job of bringing their community along with them during their upgrades. However a major version is a major version and the big change here was the drop of older browsers IE9 and IE10. And really, IE9 and IE10 shouldn't even be a consideration at all anymore. But alas...

### [webpack 4.0 final](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4)

Heyooo! Webpack up in the house! Big release from the Webpack team, happened all the way back in February. The big improvement with Webpack 4 was the arrival of more sensible defaults which was a direct response to the 0-config movement started by ParcelJS and other tools.

Also with Webpack 4 they've begun to introduce support for more module types. No longer is JavaScript the only supported file, the changes made in Webpack 4 added support for WebAssembly, JSON, ES Modules, and promised future fist-class support for CSS and other asset types.

I'm excited for Webpack 5, which, wouldn't be too surprising to see it arrive in February 2019. Not bad for a year's worth of work.

# March

### [TypeScript 2.8](https://blogs.msdn.microsoft.com/typescript/2018/03/27/announcing-typescript-2-8/)

TypeScript continued its steady and stable release cadence throughout the entire year. Started off the year with the introduction of conditional types which laid the groundwork for later features to build on top of.

This year was definitely the year of TypeScript. It wasn't so much that TypeScript got amazingly better overnight, it was more that people started to enjoy all the features that TypeSciprt had accrued over the years.

### [MobX 4 Released](https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da)

MobX 4 was released in March, a release mostly in preperation for MobX 5 which happened in June (sorry, spoilers!) MobX 4 provided an alternative API for using MobX decorators without the decorator syntax - a very needed update due to the dependency on the now outdated decorator proposal.

### [D3 5.0 Released](https://github.com/d3/d3/blob/master/CHANGES.md#changes-in-d3-50)

Not a huge release but a right and proper semver major release! D3 5 updates the default API for async methods - to now use Promises! Welcome to the present D3!

### [New npmjs website](https://twitter.com/isntitvacant/status/976567455890976769?s=12)

I didn't realize how...dated...the npm website was until the new version was released.

Also I can't believe this happened all the back in February. I've gotten to used to the new website it feels like it's been there for years.

# April

### [Announcing npm@6](https://medium.com/npm-inc/announcing-npm-6-5d0b1799a905)

npm 6 was released! Big new release for npm, and it's been the major release for npm throughout 2018.

npm 6 introduces npm audit, a tool to check the security of every dependency in your node_modules folder.

This new feature was quite prescient as 2018 had more than a handful of security scares. Having this feature at the ready was definitely a case of npm skating to where the puck was headed, not waiting for it to arrive.

### [Node.js 10.0.0](https://medium.com/the-node-js-collection/the-node-js-project-introduces-latest-release-line-node-js-10-x-bf07abfa9076)

Node 10 was released! The latest and greatest LTS version of node (so far).

### [Redux 4](https://github.com/reactjs/redux/releases/tag/v4.0.0)

Redux 4 was released. A few small breaking changes that would only affect you if you were using parts of redux that were already discouraged. This is one library that I'm glad for the update but grateful for the slow pace of iteration.

If Redux updated every 6 months I'd be a little unhappy. How much could you even change?!

### [Underscore.js 1.9.0](https://twitter.com/jashkenas/status/986678387325321216)

Finally. Seriously, finally. After 3 years a new version of Underscore was released. I can't tell you how many times I'd look at the source code of Underscare in master, to see a feature exist there (_cough_ debounce.cancel()) only to find that it hadn't yet been published. So glad this one happened.

# May

### [SmooshGate resolved: change flatten to flat in flatMap proposal](https://twitter.com/mathias/status/999101901697363969?s=12)

SmooshGate we hardly knew ye. You were big and loud and beautiful, and now you're just flat and a footnote for the history books of JavaScript versions past.

# June

### [Microsoft Buys GitHub for \$7.5 Billion](https://blogs.microsoft.com/blog/2018/06/04/microsoft-github-empowering-developers/)

Biggest news of the month by far. Did you see this coming? I still don't believe it and it's been a reality for months now.

Actually just reading this news item was a little bit of a shock for me, all over again.

All I can say is I'm glad I'm not a betting man because if someone had given me this to bet on I would be out a handful of cash.

### [Mobx 5 Released](https://medium.com/@mweststrate/mobx-5-the-saga-continues-4852bce05572)

Big new feature here was MobX taking advantage of Proxy objects to power its functionality. Yes this limits its usage to modern and evergreen browsers, however that's why MobX 4 came out earlier this year - to provide a branch that would still support older browsers.

Glad to see MobX embracing the future. Helps push us all closer to there as well.

### [ESlint 5.0 Released](https://eslint.org/blog/2018/06/eslint-v5.0.0-released)

ESLint always does a great job of helping users migrate to their newest version. Their migration guides and documentation around changes are always top of class. Truly the team that runs ESLint is admirable for the class and ease which they manage a wildly popular library.

### [ES2018 Approved](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

ES2018 is for real! Object Rest/Spread of properties gets official approval, as does Promise.finally. A pretty great year of features.

# July

### [TypeScript 3.0](https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/)

More TypeScript? More fun! TypeScript doesn't really follow semver that closely so while 3.0 looks big, it's really just the next feature release after 2.8. Still, a good release with many useful features that make typing projects more safe and more reliable.

# August

### [GraphQL JS 14.0.0 Release](https://github.com/graphql/graphql-js/releases/tag/v14.0.0)

This is the reference implementation for GraphQL and this was over a year's worth of work since the last major version of GraphQL. This brought this implementation to conformace with the June 2018 version of GraphQL, bringing with it support for new schema features and extensions.

### [Babel 7 Released](https://babeljs.io/blog/2018/08/27/7.0.0)

Major Babel versions always hit like a cannonball and Babel 7 was no exception. No matter how careful the Babel team is somehow Babel releases still always feel somewhat controversial. That being said, I think Babel 7 was the least controversial release of Babel in ages.

Babel 7 did a great job of setting the stage for Babel to truly be the platform upon which developers of the JavaScript language itself will use to help push the lanaguage forward.

The Babel team removed all yearly presets to encourage people to both use `present-env` and to think of extensions of JavaScript they want to use on a per proposal basis. This puts the onus more on the end developer which is smart as it's hard to predict what every consumer of Babel expects.

I'd expect Babel 8 to be a major breaking change in API only, as I think Babel is now in a great position to help lead the way for JavaScript's continued evolution.

# October

### [Create React App 2.0](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)

I think one of the biggest releases of the month. Honestly brought about a huge backlog of features to an official release. If you click on the blog post link there's literally an almost page high bullet point list of upgrades that went into this release.

Mostly what I was excited about was the increase in feature support such that the need to eject went down. Also Create React App 2.2 added opt-in support for TypeScript which is awesome!

### [Angular 7 Released](https://blog.angular.io/version-7-of-angular-cli-prompts-virtual-scroll-drag-and-drop-and-more-c594e22e7b8c)

Big major release from the Angular team. This continues to see the Angular team work on performance of the framework as well as provide more built-in components that make writing applications easier and quicker.

### [styled-components v4](https://medium.com/styled-components/styled-components-v4-new-final-finalest-for-real-final-final-psd-fa4d83398a77)

Very popular CSS-in-JS library. Gets smaller and smarter.

The whole landscape for CSS-in-JS libraries is the fiercest its ever been so it has been great to see that competition push the quality of every library.

### [Node v11.0.0](https://nodejs.org/en/blog/release/v11.0.0/)

New Node! The experimental branch. Gotta wait for Node 12 for LTS though.

### [Storybook 4.0](https://medium.com/storybookjs/storybook-4-0-is-here-10b9857fc7de)

Adds support to other UI frameworks outside of React such as Ember, plain ol' HtML, and others.

Also upgraded to use Webpack 4.

A nice release. Would have liked to see it come a little quicker after Webpack 4 came out though. But whose to complain when it comes for free.

# November

### [Introducing the GraphQL Foundation](https://medium.com/@leeb/introducing-the-graphql-foundation-3235d8186d6d)

An independent foundation to steward the future of GraphQL. A great sign of health for GraphQL as a whole, reducing its reliance on Facebook for its future success. I love seeing news like this.

### [Prettier 1.15: HTML, Vue, Angular and MDX Support](https://prettier.io/blog/2018/11/07/1.15.0.html)

Prettier ended the year at version 1.15 adding support for HTML, VUe, and Angular. I was honestly surprised Prettier didn't support these languages already but it's great to see it there. The more widespread Prettier can become the happier I will be. I want to be able to read every JavaScript code base ever with as much ease as possible because they're all formatted with Prettier.

# December

### [Announcing Emotion 10!](https://medium.com/emotion-js/announcing-emotion-10-f1a4b17b8ccd)

Another popular CSS-in-JS library. One of the fastest and smallest around. Did a really novel thing with creating their own JSX pragma function. A great release to see.

### [Announcing TypeScript 3.2](https://blogs.msdn.microsoft.com/typescript/2018/11/29/announcing-typescript-3-2/)

And TypeScript ends the year at 3.2. Again, slow and steady wins the race and TypeScript nails that to a T.

# [Flutter 1.0: Google’s Portable UI Toolkit](https://developers.googleblog.com/2018/12/flutter-10-googles-portable-ui-toolkit.html)

Essentialy Google's answer to React Native. It'll be interesting to see how this grows in popularity over the upcoming months.

# [WordPress 5.0 “Bebo”](https://wordpress.org/news/2018/12/bebo/)

Why's this here? Well WordPress rewrote their editor entirely in React. A big bet on a bold future. Excited to play around with it and see how WordPress continues its foray into more usages of JavaScript.

# Conclusion

What a year, huh? Did you remember all these things happening? Can you still believe that Microsoft bought GitHub? Also are you shocked there was no major releases of React? Just minor ones (with new features, and no breaking changes). Good on React for keeping things stable.

What does 2019 hold? I'm personally very excited about Webpack 5 which is supposed to have persistent caching to the filesystem to make startup time even faster.

I'm also very excited about ReasonML. I'm curious to see how its popularity and mindshare grow in 2019. It might be its year.

What are you excited about for 2019? What are you hoping for?

Oh, and before I forget - Happy New Year!
