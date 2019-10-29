---
title: Why Is React Concurrent Mode Exciting?
slug: why-is-react-concurrent-mode-exciting
date: 2019-10-27
category: code
tags:
  - react
---

_A guide for non-React engineers._

Last week the React team released an [experimental version of Concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.html) to the public. It's been in development for over a year and the React community has been very excited about its release.

What is Concurrent Mode? The documentation pages has a nice and concise description:

> Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed.

However if you don't know how Concurrent Mode works or what it actually lets you do you may be left wondering, "Why all the excitement?"

If that's you then this blog post is for you.

## The Problem Is Being In Sync

Most (perhaps all?) UI frameworks today synchronously update the browser.

Which means that when you render a list of items, the UI framework applies those changes to the screen all at once. Nothing else on the page can do anything until the UI framework is done rendering those items. If you have 1,000,000 items to render on the screen you're going to have to wait until all those items are rendered and shown before you can do anything else.

However let's say you have a filter on that same page. Where someone can filter that list of items. That person cannot type in that input box until your list of 1,000,000 items has finished being rendered.

I'm sure you've encountered this in the past. It makes for a very unpleasant user experience. The easy fix is to debounce the user input, but that still doesn't reduce the time it takes to render 1,000,000 items.

With Concurrent Mode React has the ability to pause the rendering of 1,000,000 items and update the input filter.

This lets the user type as much as they want in that input filter and not have to wait for 1,000,000 items to be rendered on the page.

This lets the browser feel more responsive and gives the user a much better experience. There's no longer any lag to show the user what they are typing in. React can jump inbetween rendering the input filter and the 1,000,000 items and never leave the user wondering why the browser seems to be locked.

This is what Concurrent Mode enables.

## How is this even possible?

Concurrent Mode is difficult to understand. It does complex things and as a result is a little complex to understand.

I'm intentionally not including code examples in this post as I want to focus on the theory. If you _are_ interested in what React Concurrent Mode [looks like in code then please check out the docs pages.](https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly)

The [React documentation about Concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.html#blocking-vs-interruptible-rendering) uses version control as a metaphor. I think this is a great metaphor to help understand how Concurrent Mode works.

However I'm going to give you another explanation. The more, the better!

Concurrent Mode let's React do two things at once (hence the word concurrent). The thing that React is primarily focused on is rendering UI to a page. So, with Concurrent Mode, React can now do two renders at once.

Having the ability to do 2 renders at the same time unlocks a whole world of possibilities.

Let's say you're on my blog's home page. There's a button on there that lets you open and close my list of posts.

You then click to my About page. The About page has text, a picture of me, and it makes an API call to fetch my latest tweets.

Without Concurrent Mode React has no choice but to immediately show the About page. This is going to show the text immediately but it will take some time for the image to load and the API call to complete. So you sit on the About page and things incrementally jump into place. This is how most UI frameworks behave nowadays.

With Concurrent Mode React can start to render my About page **in memory and while rendering my Home page** and not show it to the user. React can wait for the image to load and the API call to complete, and when that is all done, show it all at once to the user.

The user never sees things load incrementally, it just sees a page all at once. It gives a feeling of responsiveness and speed.

This is what is exciting about Concurrent Mode.

## What else can I do with Concurrent Mode?

With Concurrent Mode you can control how React uses its ability to render two things at once.

Let's say you have a page that uses two different API calls: `loadUser` and `loadUserFriends`.

We know that `loadUserFriends` is a slower API. With Concurrent mode we can decide how we want React to render the page.

Should it wait for both API calls to complete before rendering anything? Or should it wait for the API calls independently, rendering UI when each API call completes?

Furthermore imagine we had a loading spinner for each part of this page. With Concurrent Mode you can control when and how those loading spinners are rendered on the page. Perhaps you only want to show 1 loading spinner. This is possible with Concurrent Mode.

## Do you need Concurrent Mode?

No. You really don't. Most applications won't _need_ Concurrent Mode. It's far and above an advanced feature of React, one created and driven by the needs of Facebook itself.

Yet like all things the React team developed this feature in a way that it _could_ be used by the entire React community.

Such that if you _want_ these types of features you can have them.

There is no rush to immediately adopt Concurrent Mode. It won't magically transform a React app to become great.

However it is a powerful way to control how your React application handles asynchronous tasks and renders UI.

It's available if you so desire.

## Random Questions You May Have

**Can you do the things you described without Concurrent mode?**

Yes, you can! However it's hard, tricky, error prone, and I'd argue impossible to scale. With Concurrent mode these behaviors become built-in to how you write your React app. You're working with the framework rather than around the framework.

**Do you have to use Concurrent Mode?**

Nope! Feel free to never ever worry about it. Just like [React Portals](https://reactjs.org/docs/portals.html) it's available if you need it.

## Wrap Up

Personally I'm looking forward to playing around with Concurrent mode. I love what capabilities it unlocks.

The ways in which I can create my React apps are now more flexible and expressive. Perhaps even more fun?

It will be very exciting to see how Concurrent Mode evolves over the next couple of months. I can't wait to get involved.

---

## Video

I've made a more in-depth look into what Concurrent Mode is on my YouTube channel. If you want a bit of a deeper dive then have a watch below!

<iframe src="//www.youtube.com/embed/8_ZjNnUqarg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
