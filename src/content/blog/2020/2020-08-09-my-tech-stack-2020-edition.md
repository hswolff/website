---
title: My Tech Stack (2020 Edition)
postSlug: my-tech-stack-2020-edition
date: 2020-08-09
category: code
tags:
  - react
  - next.js
  - mongodb
---

In my spare time I enjoy working on side projects. Little websites and projects that I can play around with to either learn new things or to create something for fun.

In the past I've always been stymied in my attempts to create something for fun because some part of the process becomes laborious and boring to work on. So when that inevitably happens, I stop working on the project, and dust begins to accumulate.

When I'm working on a side project I don't want to focus on technical problems, I want to focus on the product I'm creating. I don't want to have to re-think how OAuth works, I want to let someone login with their GitHub credentials.

So for the past couple of months I've been putting together a tech stack that I can use on these side projects that lets me focus on the product at hand, and ignore all the technical distractions.

I'm so proud to say that I've found a tech stack I'm super excited about that does exactly what I need.

I made a video about it that you can watch right here.

<iframe src="//www.youtube.com/embed/9plIzok5LCQ" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

However if you prefer the format of spoken word, then keep on reading.

## Table of contents

---

## Frontend

### [React.js](https://reactjs.org/)

It goes without saying but I'm a huge fan of React. I think it's the best way to write a frontend application. It lets me be super productive and at this point I have many years of experience with it, letting me write code really quickly.

### [Next.js](https://nextjs.org/)

React is great, but by itself it doesn't go very far. To be productive with React requires a lot of tooling and setup and frankly I would prefer to not waste my time dealing with all that.

Next.js handles that all for me, and then some. It lets me start coding with React and not worry about all the boilerplate noise.

Beyond the boilerplate Next.js comes with some truly incredible features:

#### Server side rendering

I've tried creating my own server-side rendered React app in the past and let me tell you...it's very hard. The fact this comes out of the box with Next is something that I think most people will take for granted, but it's incredible how easy they make it.

#### Static page generation

I get the best of both worlds - server rendered pages AND statically generated pages. Which means that for pages that I want to offload most of the work to the client, I can!

#### Server API endpoints

No need for Express to make custom data endpoints, it's built in to Next.js!

---

All these features make it super easy to get going with Next.js. It's truly the best React framework available right now.

### [Tailwind CSS](https://tailwindcss.com/)

I'm not a designer. I can implement designs, but creating my own designs is a large area of weakness for me.

I also have no desire to use Bootstrap. I can't stomach the thought of my site looking like another bootstrap website.

Instead I'm turning my interests to Tailwind, which has some strong default styles available, but also being flexible enough that I can truly make my project look like my own.

It's also just a very interesting way of doing CSS. The utility CSS approach is one that I would have scoffed at a few years ago but I'm really excited about it nowadays.

The fact I can design a full website just with Tailwind and no custom CSS is truly incredible to me.

### [Chakra UI](https://next.chakra-ui.com/)

Tailwind covers just CSS and styles. However some components, such as a Tooltip or a Modal, require interactivity and JavaScript.

Again, because I'd rather focus on my project and not the technology, I'm turning to Chakra to cover those use cases.

It also has some strong default styles that look to blend nicely with Tailwind.

### [Emotion](https://emotion.sh/docs/introduction)

If I do need my own custom styles then I'm a big believer in CSS-in-JS nowadays. (If you want to hear [more of my thoughts on CSS-in-JS then watch my video about it](https://youtu.be/rKz6cLXhpwA)).

Emotion is my favorite CSS-in-JS library nowadays. It lets me be hyper productive and super expressive in how I write my styles. Great library.

### [React Context](https://reactjs.org/docs/context.html)

To store data I've gone back to basics and just rely on vanilla React Context. Most of my data needs are simple enough that a plain Context provider will handily cover my needs.

If I do find my data structures getting complex then I will always turn to [Immer](https://immerjs.github.io/immer/) as an easy to update my state.

Check out my videos about Context and Immer to gain more of an idea of how I like to use them:

- [Why I Love useReducer](https://youtu.be/o-nCM1857AQ)
- [How to useContext with useReducer](https://youtu.be/StABs9JxeNE)
- [Level Up useReducer with Immer](https://youtu.be/PjsGz6sNG3g)

### [React Query](https://react-query.tanstack.com/)

This is a new addition to my tech stack but one I'm super glad to have found. React Query makes it easy to make REST calls to my backend and cache the results in the browser.

It's API is intuitive and provides some lovely structure to all my data fetching. Very well designed library!

## Backend

### [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

Surprised to see Next.js again? Don't be! This is why I love it so much - it does double duty!

Using Next.js' API Routes I can serve up any arbitrary data to the frontend. Completely replaces Express for me!

### [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

_Disclaimer: I work for MongoDB_

I need to store data somewhere, right? And the best place for that is a database, right?

The best database right now in my opinion is MongoDB. Not only that but MongoDB Atlas is a hosted mongodb service, with a free tier included!

Which means I can create a free MongoDB database, connect it to my Next.js app, and serve data from my database, all for free! Wonderful!

### [NextAuth.js](https://next-auth.js.org/)

Authentication is a pain in the ass to code. I have no interest in re-implementing the OAuth protocol to provide authentication via third-party sites.

Luckily this library, NextAuth.js, takes care of all that boilerplate for me.

The installation process is drop dead simple - just add one splatted route in my Next.js API Routes.

All told I was able to login via GitHub in under 5 minutes. Supurb.

### [faker.js](https://github.com/Marak/Faker.js)

While developing I need some dummy data to play with. Faker.js is a great library for generating fake data so I can spend more time designing my UI and less worried about filling in blank spaces. Nice little library.

## Testing

### [Jest](https://jestjs.io/)

Jest is the gold standard in testing for JavaScript applications. In my opinion no other testing framework comes close to offering what Jest provides.

Strong defaults, massive ecosystem, and a true joy to use.

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

For testing React applications, React Testing Library is the best choice. It's strongest selling point is that it only uses React's public API when rendering React components.

This means that you're gauranteed to be testing components the same way they are rendered for a user.

Additionally the utilities and helper functions encourages strong testing practices such that your tests cover how your users use your application.

### [Cypress.io](https://www.cypress.io/)

Cypress is the best way to write end-to-end tests. E2E tests being tests that run in a browser.

There are two standout features for Cypress that make it super pleasing to work with:

1. It has built in flakiness mitigation. If you've ever used Selenium in the past, or other browser-based testing libraries, then you know how painful it is to write reliable tests. For example, when you open a model with an animation and click a button inside the modal, adding in handling to make sure the test waits for the animation to finish is notoriously difficult and annoying. This is built-in to Cypress.
2. It is incredibly easy to debug and write tests. It has a GUI that provides a clear way of understanding how your tests are behaving. In that GUI you get screenshots of how your tests changed the browser, including time-traveling capabilities, to roll back a few steps and see the browser at a previous step. You truly have to try it to understand how powerful it is.

## Hosting

### [Vercel](https://vercel.com/)

There's no better place to host my project than by the authors of Next.js, that being Vercel.

They have a free tier as well, and a super easy deploy process.

What's the deploy process? Push to git and that's it. Vercel watches changes to your git repo and will automatically rebuild on any new commits.

It also has branch previews. Such that if I create a branch and push new code to that branch, Vercel will also build that version of my site for me as well.

A wonderful experience all around.

## Start Coding!

That's my current tech stack! It took me a while to put it together, but I'm very happy with how it turned out.

What I love about this stack is it handles all the boilerplate for me. I don't need to worry about auth, design, or how to store data. It's all taken care of for me.

What I love even more about this stack is that by default it costs \$0. Which, when I'm playing around with a side project, is what I want. I don't want to pay something while I'm still figuring out what it is I'm building.

Curious if you use any of the same technologies as me, or if your stack is slightly different. [Be sure to tweet at me to let me know, I'm curious to hear!](https://twitter.com/hswolff)
