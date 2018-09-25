---
title: React Native
slug: react-native
date: 2016-06-29T01:14:36.432Z
tags:
- react
- react-native
- javascript
---

A couple of months ago I wrote a [React Native](http://facebook.github.io/react-native/) application, the new [Chartbeat iOS App](http://blog.chartbeat.com/2016/04/07/say-hello-to-the-all-new-chartbeat-ios-app/). It was a great experience. I got to learn a lot about React Native and was able to create and launch an app. If there's anything I like more than writing software, it's releasing it.

I was able to give a talk recently at [SyntaxCon](https://2016.syntaxcon.com/) about getting started with React Native. I named the talk [Going Native with React Native](https://2016.syntaxcon.com/session/going-mobile-with-react-native/) and you can [check out the slides](https://speakerdeck.com/hswolff/going-native-with-react-native) at your leisure. As soon as the video is up I'll link to it.

I've wanted to write about my experience with React Native for a long time but haven't had the opportunity to do so until now. A lot of the content for my talk was derived from my experiences working on React Native while developing the Chartbeat iOS app. That'll be true for this post as well. I'm considering this post the written form of that talk.

# Picking React Native

I started working with React Native way back in September 2015. At this point in time React Native was at version `0.11.0-rc` and Android support was not yet released. Before we even decided to use React Native as the foundation for the new mobile app I looked around at the various options available on the market.

There is [Cordova](https://cordova.apache.org/) (Phonegap) which I've used before. At a previous job I helped create a Phonegap application and did not have the greatest experience. For all of its benefits there are a fair amount of short comings. Looking into Phonegap after more than two years away showed that not much had changed. You still needed to re-implement every native control using web technologies and web is still slower than native.

There are a couple of compile to native platforms still available. [Xamarin](https://www.xamarin.com/) wasn't considered as I'm not a fluent C# engineer and I didn't want to learn Xamarin and C# at the same time. I've used [Appcelerator](http://www.appcelerator.com/) at a previous job as well and had very negative experiences.

Ultimately the decision came down to writing the application 100% natively or use React Native. We wanted to write an Android app as well and the promise of React Native to support both platforms with the same codebase pushed us to pick it. The fact that React Native was built on top of React gave me an immediate edge as I already knew how to use React, giving me a jump start.

It also didn't hurt that picking React Native meant I got to play with an exciting new piece of technology. That's not a sound technical reason but it makes for a powerful motivational reason. That meant working late nights and weekends were a pleasure as I was able to work on something that I was genuinely excited about.

# Built on React

It's hard to understate how powerful it is that React Native is built on top of React. This gives you an immediate advantage when writing a React Native application as you already have a solid understanding of how things work.

We all know and love React's declarative nature, and React Native continues that tradition. Feel free to declaratively write your components as you would with React. The main difference is the base components you use.

Instead of `<div />` and `<span />` you use `<View />` and `<Text />`. React Native provides a suite of base UI components that you can use, and for almost all cases you can find ways to make those components do whatever it is your application needs.

This simple sidestep, of just providing additional base UI components is what allows projects such as [react-native-web](https://github.com/necolas/react-native-web) to exist as they're just a re-implementation of these components, targeted towards the web.

# JavaScript Ecosystem

Since React Native application-level code is written in JavaScript and ran by a JavaScript engine at runtime this means one glorious thing: you can use pretty much the entire npm ecosystem in your React Native application.

The only restriction is the npm package can't touch the DOM, because well, there is no DOM in a React Native application.

That means that you're able to use all your old favorites such as lodash or Redux. It also gives you the feeling of being completely empowered as you have thousands upon thousands of npm packages ready for inclusion in your React Native application.

# CSS in JavaScript

Before I started using React Native I knew that its approach to layout and styles was not conventional, at least not in the web sense. React Native [leverages JavaScript to style your app](http://facebook.github.io/react-native/docs/style.html), meaning that all layout and style is written in a `.js` file.

This sounded heretical when I first came across it. It flew in the face of so many conventions and practices that I had instilled into every fiber of my developer body.

Yet after I started writing styles in JavaScript I realized one unexpected truth:

I loved it.

As I've said to countless people I have drank the Kool-Aid hard and I am now a firm believer in the power of writing your styles in JavaScript.

It provides so many niceties.

- You have the full expressive power of JavaScript at your disposal when writing your styles.
- You can treat shared styles as a regular old JavaScript object, sharing them between modules as you would anything else.
- When you open a component to see what it does you also get all of its styles in the same file. That means that you know everything you want about a component by just looking at one file.

I'm looking for the smoking-gun solution for styles in JavaScript for the web, and as soon as I find it I'm immediately switching to it. I absolutely loved writing my CSS this way.

# Developer Experience

The development workflow used when writing a React Native application has more in common with the web than it does with a native iOS or Android application.

React Native supports live reloading and hot reloading out of the box. You make a change to a file and see the changes almost instantly applied to the screen. This immediate feedback loop allows you to experiment without fear. It also makes the pixel-perfecting process a breeze as you can easily live-tweak with a designer.

You can also hook up React Native to a Chrome Developer Console, giving you access to poke around the application as it's running, just as you would a web app. You can set breakpoints, log out to the console, and even start poking around the code via the REPL provided by Chrome Dev tools.

I've written native applications in the past and the developer experience that React Native provides is unparalleled. You get all the tools a web developer gets, yet it gets rendered into a native application.

# Easy Escape Hatches

While React Native provides a lot out of the box it's easy to drop down to native land. React Native was built to be extended and you can easily add your own custom [UI components](http://facebook.github.io/react-native/docs/native-components-ios.html) or [native modules](http://facebook.github.io/react-native/docs/native-modules-ios.html).

This gives you the freedom to write as much custom code as you need without having to worry about React Native prescribing what you can or cannot do.

# React Native Moves Fast

When I started using React Native in September 2015 it was at version `0.11.0-rc`. At the time this post was written, June 2016, React Native is now at `0.29.0-rc`. There's been 18 releases in under a year, and there doesn't seem to be any signs of that release pace slowing down.

Coming from native iOS and Android that pace of development is unthinkable. In those native platforms you're used to one major release a year. React Native is going the opposite path, choosing to release frequently and with smaller changes.

Yet some of those version bumps contained some pretty big changes. When Android support was added in fall of 2015 that was just a version bump but that's one hefty changeset.

And from version `0.11.0` till around `0.19.0` almost every release held some pretty big changes. I haven't used recent versions but from reading the [release notes](https://github.com/facebook/react-native/releases) it seems like the amount of breaking changes is subsiding, making for a less volatile upgrade process.

# Native Knowledge Not Required

People always ask me, 'Do I need to know the native platform to use React Native?'

The short answer is no.

You can go a very long way just skating between the lines that React Native provides for you. The base UI components and built-in native modules provide an incredible amount of flexibility when it comes to writing your React Native application that for almost all apps you will never have to worry about writing custom Swift or Java code.

That being said, you should know the UI and UX patterns that are used by your native platform. What that means is you should understand how and why the dedicated Android back button exists. Or you should understand what is a ShareSheet on iOS.

If you want your app to feel truly native you need to understand how the native platform performs certain tasks so your app feels truly native to the platform.

# Conclusion

I'm dying to write my next React Native application. I had some of the most fun I've had in a long time writing the Chartbeat iOS app. The React Native framework provides an awesome developer experience in an environment that is historically a  cumbersome to develop for.

Not only am I itching to write my next React Native application I'm also looking to see if I can obtain the holy grail of write once and have the code work on iOS, Android, and the web (using react-native-web). If that can be accomplished then I'll be as pleased as a peach.

