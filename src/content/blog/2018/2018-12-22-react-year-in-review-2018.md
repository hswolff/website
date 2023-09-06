---
title: React Year in Review 2018
postSlug: react-year-in-review-2018
date: 2018-12-22
category: code
tags:
  - react
---

Hello everyone! Welcome to my React Year in Review 2018!

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/pLh7LMghChE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

React's 2018 was one of steady growth and doubling down on foundational concepts and principles. It was a year filled with a lot of thought and not as much action - a combination that I think will pay great dividends in the year to come.

This was the year of Suspense, and Concurrency, and Hooks! All these high minded concepts were focused on filling in and smoothing down the rough edges of React. Which is a weird thing to say as you could easily look at React and for certain use cases it does everything you could ask for. However when the React community and core team started looking into some of the features that were a little awkward to do, they found room for improvement.

That's what this year was about. Rather than expand React (albeit React did expand), the React core team rethought some core assumptions on how one can best use React and brought their solutions to light this year.

Without further ado, let's get to the recap.

# January

## [React Lifecyle Hooks Changing](https://github.com/facebook/react/pull/12028)

This was one of the first hints of big things to come. Deprecating class lifecycle methods? Seemed outrageous at the time. But oh, to be that naive again.

## [New React Context API Merged](https://github.com/facebook/react/pull/11818)

For too long React had a Context API that was actively discouraged from use. It wasn't until January of 2018 that we finally got an officially supported Context API. The most exciting part of it? It used a community convention as its primary API - render props.

# February

## [React Native (including Fresco, Metro, and Yoga) relicensed under the MIT license to match React](https://twitter.com/reactjs/status/964689022747475968)

Big news for a lot of people. The fear of using React Native was removed when it was relicensed to use the MIT license. Bravo to Facebook.

# March

## [React Suspense](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)

The demos heard around the React world. This was what started a whirlwind of thought and changes for 2018. Dan shows a version of React with two un-released features: time slicing and suspense. I think it took me the rest of 2018 to finally understand what the heck that meant.

## [React Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

That PR back in January about deprecating class lifecycle methods? Finally came home to roost in the form of a blog post officially announcing the upcoming changes.

This blog post was quickly followed by another...

## [React v16.3.0: New lifecycles and context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

...that actually released the lifecycle changes. Long live `getDerivedStateFromProps`!

Also just as exciting, the new Context API becomes available.

# April

## [Redux 4](https://github.com/reactjs/redux/releases/tag/v4.0.0)

Redux gets a nice version bump, rolling out some incremental changes to the community. Nothing earth-shaking here. Just a nice and easy new version.

# May

## [React Suspense Merged into Master](https://github.com/facebook/react/commit/6565795377d1d2c79a7708766f1af9e1a87517de)

That demo that Dan showed in March finally gets merged into React master. In isolation its hard to see where it fits in, but seeing the steady forward progress of React was exciting.

At this point the feature is still turned off as it's still under active development.

## [React turns 5 next week](https://github.com/facebook/react/tree/75897c2dcd1dd3a6ca46284dd37e13d22b4b16b4)

React turned 5 in 2018! Happy birthday React! If you ever have a recruiter asking for 6+ years of React experience either: you're lying or you worked at Facebook.

# June

Nothing happened. At least, nothing that I could find.

# July

## [Umbrella issue for releasing React Suspense to open source](https://github.com/facebook/react/issues/13206)

Things start to get a little more official for React Suspense. This GitHub Issue is opened to track its progress. It still seems to be somewhat maintained, with the last update coming at the end of November, however I'm not sure if it's still a canonical source of truth.

# August

## [PR: React.lazy](https://github.com/facebook/react/pull/13398)

A wild new feature appears out of the blue! It's not really talked about nor understood until later in the year, but `React.lazy` first shows itself in August.

## [React Fire: Modernizing React DOM](https://github.com/facebook/react/issues/13525)

One of my personal favorite bits of news from the past year. Just as Fiber was to React so is Fire to React DOM.

Essentially a rewrite of React DOM to address issues and learnings from the past five years of development.

It's still very much in progress and I'm excited to see how it matrues during 2019.

# October

## [Create React App 2.0](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)

The officially supported scaffold tool gets a huge new release. Packed with many new and big features, it really brought a whole new level of maturity to the project.

Personally I was very excited with version 2.1 which added opt-in support for TypeScript. Even less reasons to eject!

## [React v16.6.0: lazy, memo and contextType](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)

The second and final major release of React in 2018. This releases `React.lazy` coupled with a synchronous version of Suspense.

It's kinda surprising that there were only two major React releases in 2018. 16.4.0 and 16.5.0 didn't contain any major new features, so this was the last one that most people are probably still using.

## [React Hooks](https://reactjs.org/docs/hooks-intro.html)

The biggest event of 2018. React Hooks. If you don't already know what this is then [please read my blog post that will tell you everything you need to know.](/blog/react-hooks/)

# November

## [Hooks RFC Merged](https://github.com/reactjs/rfcs/commit/3826b8804f4795743a7c4c61d1caf6f41ba9607d)

The React Hooks RFC is merged, officially announcing it as approved and slated to be included in an upcoming version of React.

# December

## [React-redux 6](https://github.com/reduxjs/react-redux/releases/tag/v6.0.0)

Major new version of react-redux. This one includes the new Context API - the same one that was released all the way back in March. Almost an entire year before that feature was incorporated.

I'm glad for that delay as it allowed the react-redux team to take their time and carefully find the best method for using new React features. Had they rushed they could have introduced churn, something that I very much don't want to see in react-redux.

## [React 16.x Roadmap](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html)

A semi-official 'state of React' blogpost. It lays out the upcoming year of expected changes for React. It was a great post and did a great job of addressing the confusion that was floating around the React community.

In some ways I wish it had come sooner in the year, but I don't think the React core team themselves even know what that blog post would have said in July.

However like all good things, this came in time and delivered in a great fashion.

# Conclusion

What a year for React. I don't feel like a lot happened this year - I feel like 2019 is going to be the one that will be truly mind-boggling. When Concurrent React is delivered it's going to be a paradigm shift in how React applications behave.

I'm also so very excited to play with React Hooks more. From my brief experiments it brings a whole new level of joy back into React that I didn't realize I was missing.

I've told you my highlights. What were yours?

Are you as hooked as I am on React Hooks? (I'm so sorry I'm not sorry for that joke.)

Cheers to a great 2018 React! Looking forward to 2019!
