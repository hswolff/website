---
title: Things I Don’t Like about Vue.js (as a React engineer)
slug: things-i-dont-like-about-vuejs-as-a-react-engineer
date: 2020-10-27
category: code
tags:
  - vue.js
  - react
---

This blog post is a follow up from my last article [What Vue.js Does Better Than React](/blog/what-vuejs-does-better-than-react/).

This article, instead of focusing on what Vue.js does better than React, will take the opposing perspective.

Let's take a dive into all the things that I think React does better than Vue.js

Notable preface: I've used React professionally for the past 5 years, so it's obviously my UI framework of choice. I've tried to take as close to an objective stance on these points, but I'm sure you'll see my subjectivism poking through.

## Table of Contents

## [Templates](https://v3.vuejs.org/guide/template-syntax.html)

One of the biggest features of Vue.js, and frankly what is Vue.js' biggest strength, is its template syntax to write UIs.

After using React for 5 years, which is as close to plain JavaScript as you can get, having to learn another template syntax is not something that I want to bother with.

In my career I've learned: Mustache.js, Handlebars, Lodash's template syntax, Django syntax, and probably more that I've forgotten. I don't want to learn yet another template syntax with Vue.js.

Each template syntax has some similarities and some differences that gives me ever so much of a headache switching from one to another.

Another thing that I don't like about template syntax is that it adds a layer of abstraction between when you write and what runs in the browser.

With React you have [JSX which just compiles down to function calls](https://reactjs.org/docs/jsx-in-depth.html):

```jsx
// React in
<div title="Hello">Message: {message}</div>;

// React out
React.createElement(div, { title: 'Hello' }, 'Message: ' + message);
```

With Vue.js I have no idea what the templates compile down to.

Both React and Vue.js only allow [JavaScript expressions](https://v3.vuejs.org/guide/template-syntax.html#using-javascript-expressions) in their templates, which makes sense given the constraints of JavaScript, but where things get confusing for me with Vue.js is that [there’s only access to a subset of globals](https://v3.vuejs.org/guide/template-syntax.html#javascript-expressions) inside expressions. I'm sure there's a good reason for that, but having to keep in mind that Vue.js templates are not simply JavaScript adds a layer of complexity I'd rather do without.

## [Directives](https://v3.vuejs.org/guide/template-syntax.html#directives)

Directives is the killer feature of Vue.js. It's what makes their templates so powerful.

However.

Directives are effectively an API you have to learn to use Vue.js templates efficiently. Compared to Angular.js (which I used way back in the day) [the list of Vue.js directives](https://v3.vuejs.org/api/directives.html) are pretty small, however it's an added layer of complexity required to use Vue.js efficiently.

This is further exacerbated by the flexibility Vue.js bestows directives, which itself comes with additional complexity.

There are [directive arguments](https://v3.vuejs.org/guide/template-syntax.html#arguments), that can have [dynamic arguments](https://v3.vuejs.org/guide/template-syntax.html#dynamic-arguments), and then there are [directive modifiers](https://v3.vuejs.org/guide/template-syntax.html#modifiers) (which I did hold up as a strength in my first blog post, but it comes at the cost of additional complexity)!

Most of the syntax for directives aren't terrible, but I do find the syntax for [v-for directives](https://v3.vuejs.org/api/directives.html#v-for) to be very un-JavaScript. They're much closer to Python than anything else, which seems weird to include in a JavaScript framework.

## [Components](https://v3.vuejs.org/guide/component-registration.html#module-systems)

This is a nitpick, but one that reinforces my template point.

Since Vue.js is largely a template driven framework, when you extend it with custom components, you need to tell the Vue.js template compiler about the components you're using.

This results in a lot of duplicate code, that just looks completely superfluous to me.

```jsx
// Import your components as you normally would with ES Modules
import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

export default {
  components: {
    // Register them with the template compiler
    ComponentA,
    ComponentC,
  },
  // Then finally use them in your template
  template: `
		<ComponentA />
	`,
};
```

## [Custom Events](https://v3.vuejs.org/guide/component-custom-events.html)

Aside from templates, custom events are one of the biggest differences between Vue.js and React.

Everything in React is a component and a prop (to almost an unhealthy degree). When you want a child React component to communicate to a parent component you pass down a function that the child component can call:

```jsx
function Parent() {
  const onClick = () => alert('hello!');
  return <Child onClick={onClick} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click me!</button>;
}
```

However the way to do this in Vue.js is with events:

```jsx
const ParentComponent = {
  components: { ChildComponent },
  template: `<ChildComponent @greeting="alert('hello')" />`,
};

const ChildComponent = {
  emits: ['greeting'],
  template: `<button @click="$emit('greeting')">Click me!</button>`,
};
```

Honestly I'm not terribly sure how I feel about using events as a way for children to communicate up.

When I used events with Angular.js it was horrible as there was no concrete contract between what events were emitted and what were being listened to.

However Vue.js mitigates that issue with tooling to make sure that when some parent tries to listen to an event the component actually emits that event.

Without that tooling I think Vue.js would fall prey to the same issues as Angular.js but it's Vue.js' excellent tooling that truly saves the day here.

That being said, React's function passing via props works just as well and is in my opinion even more robust.

## [Method Event Handlers](https://v3.vuejs.org/guide/events.html#method-event-handlers)

Related to custom events is how Vue.js attaches event handlers into their templates. It's one of my most despised mechanisms: string references!

When you reference a method in a Vue.js template you pass in the name of the function as a string:

```html
<button @click="greet">Greet</button>
```

Which...I've been bit so bad in the past when using string references.

However like above, the saving grace here is Vue.js' tooling will catch any silly typos. However it's a pattern I've grown to greatly dislike and would prefer not to use again.

## [Reactivity](https://v3.vuejs.org/guide/reactivity.html)

Most of the magic of Vue.js comes from its reactivity library. Its what gives Vue.js the ability to efficiently and quickly update UI when data changes. It reminds me greatly of [MobX](https://mobx.js.org/README.html), but built-in to Vue.js and tailored for its needs.

However both MobX and Vue.js' Reactivity comes with trade-offs, where you have to consider the implementation details of Reactivity when using it in components.

For example when creating a reactive object you wrap the object with the `reactive` function. However when you want to use a primitive value you wrap it in `ref` and it acts very similar to React's `useRef` hook.

If you want to destructure a `reactive` object you need to wrap it in `toRefs(reactiveObject)` to make sure you don't lose the reactive bindings. Which is only needed due to how reactivity works in Vue.js (with Proxy's).

For primitive ref values Vue.js will [automatically unwrap the ref values in templates](https://v3.vuejs.org/guide/reactivity-fundamentals.html#ref-unwrapping), which is nice and helpful, but produces inconsistent usages of ref values.

In templates you don't have to unwrap, but in the component JavaScript you need to unwrap. This added context switch seems un-necessary to me and confusing at first glance.

For common use cases I'm sure these edge cases are seldom felt, but I'm curious how it scales.

This of course is opposed to React's almost too simple `useState` and `useRef` which just return setter functions and a consistent ref-object interface respectively. Perhaps React's API is too simple as it pushes most of the behavior on the end-developer, but at least there's no magic, and that's what I care about most nowadays.

## Video

Like every post, I have an accompanying video to watch as well:

<iframe src="//www.youtube.com/embed/zuLR3KcxIOY" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Wrap-up

It shouldn't be any surprise that I prefer React's way of doing things more than Vue.js.

Ultimately the difference comes down to my dislike for how much Vue.js does on my behalf. I prefer to have access to the raw functions and methods to completely control my UI - which React provides.

React isn't without its share of quirks, but I do find React's quirks to at least be clear. There's very few layers of indirection between what I wrote and what React does. (Ignoring the dark magic that is the react-reconciler library and god help anyone who tries to debug stack traces within those depths).

It's hard to sit here and not say that React is better, because I do personally think React is better - for me! If Vue.js tickles your fancy better then keep using Vue.js! My only hope here is to highlight the differences between Vue.js and React and why React remains my preferred choice for a UI library.
