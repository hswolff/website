---
title: What Vue.js Does Better Than React
slug: what-vuejs-does-better-than-react
date: 2020-10-19
category: code
tags:
  - vue.js
  - react
---

I've been a React engineer for the past 5 years. I love React. I love making React applications. I think it's one of the best UI frameworks available right now.

However, there are a few competitors in this space. One of the biggest is [Vue.js](https://vuejs.org/).

I've played around with Vue.js a little bit in the past but I figured it was way past due to do a deep dive into how Vue.js works, and how it makes my life as a UI engineer easy.

After delving deep into the Vue.js docs and playing around with Vue.js (note: I am in no way a Vue.js expert) I was shocked to find myself liking the way Vue.js did some things better than React.

Ultimately I hope that React ~~steals~~ is inspired by these things that Vue.js does and starts doing them as well.

```toc
# This code block gets replaced with the TOC
```

## Different Philosophies

One of the key differences between Vue.js and React is how they market and refer to themselves.

Taken straight from their home pages, React describes itself as "a JavaScript **library** for building user interfaces" whereas Vue.js describes itself as "progressive JavaScript **framework**" (emphasis mine).

React is a library, Vue.js is a framework. I think in many ways that is the underlying reason for the difference in how and why each UI framework does the things it does.

I wanted to highlight this so you keep it in mind while you read this post. Frameworks are historically more comprehensive and exhaustive in what they provide and require, whereas libraries are slimmer and do less, but what they do focus on they do extremely well.

## [Single File Components](https://v3.vuejs.org/guide/single-file-component.html)

Both Vue.js and React have components as a building block to create your UI.

Components are commonly comprised of 3 parts:

- UI (HTML)
- Behavior (JavaScript)
- Appearance (CSS)

Vue.js has their concept of a "Single File Component" which is an out of the box way to write components that covers all 3 parts.

Here's what it looks like:

```html
<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
  module.exports = {
    data() {
      return {
        greeting: 'Hello',
      };
    },
  };
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
```

You don't have to be a Vue.js engineer to understand what's going on here.

React components include UI and Behavior out of the box, but style is very much kept out of the equation:

```jsx
import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Current count: {count}
      <br />
      Click me
    </button>
  );
}
```

Of course React has a very rich community so if you do want to include styles you can easily reach for [Emotion](https://emotion.sh/docs/introduction) or [Styled Components](https://styled-components.com/) and they will fill the Style hole, but:

- It's not built in
- You have to know these libraries exist to use them.

As opposed to Vue.js where it's there, for free, by default.

## Officially Supported Related Libraries

Any sufficiently large and complex UI application requires two additional pieces of functionality to support their large size:

- Router
- State Management

Vue.js has officially supported libraries that cover both those use cases, [Vue Router and](https://router.vuejs.org/) [Vuex](https://vuex.vuejs.org/) respectively.

These libraries are explicitly mentioned on the Vue.js docs page and they are developed and maintained alongside Vue.js core. That's simply phenomenal.

It gives new Vue.js engineers a clear path towards a solution to their problems and gives them the confidence that these libraries are built to last so they can be confident when choosing them.

Having first-party supported libraries doesn't limit community solutions, but it does provide a go-to solution for new comers.

## [Style Guide](https://v3.vuejs.org/style-guide/)

Uh, I want React to have this yesterday. Before you even read this section click the link and browse around Vue.js' style guide.

It answers so many questions newcomers to Vue.js may have. It provides best practices and guidelines on how to write "proper" and approachable Vue.js applications.

It shares and codifies battle tested and community vetted best practices and patterns.

To top it all off - it's maintained and supported by Vue.js itself! Terrific!

## [Class and Style Bindings](<[https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes](https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes)>)

As mentioned above Vue.js has built in support for styling. Further than that Vue.js essentially has the library [classNames](https://github.com/JedWatson/classnames) built-in.

Classnames is a terrific library for easily concatenating and dynamically constructing CSS classnames that should be applied to an HTML element.

In React land you'd have to know this library exists, and then install it.

In Vue.js it's just another built-in feature. [From the docs](https://v3.vuejs.org/guide/class-and-style.html#object-syntax):

Given a Vue.js template like this:

```html
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```

And data like this:

```jsx
data() {
  return {
    isActive: true,
    hasError: false
  }
}
```

The resulting UI will be:

```html
<div class="static active"></div>
```

Having this built in is awesome.

Vue.js goes even further with their support for inline styles. Vue.js, like React, supports inline styles, however where Vue.js outshines React is its ability to auto prefix CSS that needs it.

[From the docs:](https://v3.vuejs.org/guide/class-and-style.html#auto-prefixing)

> When you use a CSS property that requires vendor prefixes in :style, for example transform, Vue will automatically detect and add appropriate prefixes to the applied styles.

Truly shows the strength of being a framework and controlling your own template syntax.

## [Slots](https://v3.vuejs.org/guide/component-slots.html#slot-content)

Everything in React is a prop.

If you want to render multiple arbitrary children in a React component then you just add more props:

```jsx
function Nav({ left, right }) {
  return (
    <nav>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </nav>
  );
}

function App() {
  return (
    <main>
      <Nav left={<Logo />} right={<UserDropdown />} />
    </main>
  );
}
```

This works fine but it's a tad awkward, especially if the content inside the props gets large.

Vue.js takes a different approach via Slots, and I think it's API is a little more cleaner.

```html
<!-- A Vue.js component template named "base-layout" -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- When "base-layout" is used -->
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

Vue.js uses Slots (which is inspired by the Web Components spec draft) to clearly denote where content goes inside a component.

Something that Vue.js does repeatedly is provide shorthand for common tasks. In this case, the above example can be abridged with the Slot shorthand:

```html
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

## [Directive Modifiers](https://v3.vuejs.org/guide/template-syntax.html#modifiers)

Vue.js has this feature called Directive Modifiers that I think are really really cool.

Before I can talk about Directive Modifiers let me give you a quick pitch on what a Directive is.

Directives are "special attributes with the `v-` prefix" which you use inside Vue.js templates.

> A directive's job is to reactively apply side effects to the DOM when the value of its expression changes

For example:

```jsx
// If "seen" variable is false then this p tag is not rendered
<p v-if="seen">Now you see me</p>
```

There's directives for event handlers:

```html
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

[And there's many more Directives.](https://v3.vuejs.org/api/directives.html)

Directives also support modifiers.

It's a very developer friendly way to perform common tasks with common directives.

For event handler directives (`v-on`) there's a whole slew of modifiers:

```html
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

...and more!
```

If you wanted to do this in React you'd either make a helper function or a custom component. Which is fine, but doesn't feel as clean compared to directive modifiers.

I am curious if someone could make a Babel JSX superset so you could write code like:

```javascript
<form onSubmit.prevent={onSubmit} />
```

And it would transform to:

```javascript
React.createElement(form, { onSubmit: preventWrapper(onSubmit) });
```

It's not in the ethos of React, but I still think it's a super neat productivity win.

There's many more Vue.js modifiers. Some of the coolest ones are [key modifiers](https://v3.vuejs.org/guide/events.html#key-modifiers):

```html
<!-- only call `submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />

<input @keyup.page-down="onPageDown" />
```

Very, very cool.

## [Form Input Bindings](https://v3.vuejs.org/guide/forms.html#basic-usage)

The `v-model` directive has a really interesting characteristic when binding data to form input elements.

From the docs, v-model internally uses different properties and emits different events for different input elements:

- text and textarea elements use `value` property and `input` event;
- checkboxes and radiobuttons use `checked` property and `change` event;
- select fields use `value` as a prop and `change` as an event.

What's great about this is you don't need to care about how the data is synced, just that it's taken care of for you.

Let's compare how React would do these bindings and how Vue.js does it:

```jsx
// Input
////////

// React
<input type="input" value={message} onChange={onChange} />

// Vue.js
<input type="input" v-model="message" />

// Checkboxes and Radiobuttons
////////

// React
<input type="checkbox" checked={message != null} onChange={onChange} />

// Vue.js
<input type="checkbox" v-model="message" />

// Select
////////

// React
<select value={message} onChange={onChange}>
	<option>A</option>
</select>

// Vue.js
<select v-model="message">
	<option>A</option>
</select>
```

Detecting a pattern here?

Now, one thing I will say in React's defense is that React encourages (and requires) you to learn how the data is actually set and how it changes. Which means that if you were to ever write a form with Vanilla JS you'd have a lot more knowledge on how it works and be able to code it correctly. As opposed to Vue.js which just abstracts away all those quirks for you.

## [Custom Directives](https://v3.vuejs.org/guide/custom-directive.html)

Like any good framework you can create your own custom directives in Vue.js.

Vue.js does note that "the primary form of code reuse and abstraction is components" however one of the best examples of why a custom directive may be better is with their custom `v-focus` directive to automatically focus an input element on mount:

```jsx
const app = Vue.createApp({})
// Register a global custom directive called `v-focus`
app.directive('focus', {
  // When the bound element is mounted into the DOM...
  mounted(el) {
    // Focus the element
    el.focus()
  }
})

<input v-focus />
```

In React you'd probably write a custom component to accomplish the same thing, which seems a little heavy for such a light task.

## [Written in TypeScript](https://v3.vuejs.org/guide/typescript-support.html)

Last but not least, Vue.js was recently rewritten from the ground up in TypeScript.

This means their TypeScript support is first-class as the framework itself is written in TypeScript.

Ultimately it doesn't really matter what React is written in, and I don't think it makes that much of a difference, but it's still a small little thing that was nice to see Vue.js have.

## Video

I've expanded on these thoughts in video form as well! Feel free to watch if you're interested:

<iframe src="//www.youtube.com/embed/RFlQ8HP8Tr4" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Closing Thoughts

After all that am I going to abandon React and start using Vue.js exclusively? No. I still very much enjoy the "library-ness" of React and frankly I'm already very proficient at writing React applications.

However I would love to see React grab some inspiration from Vue.js and incorporate some of these great ideas into React. If I had to choose just one from this list it's absolutely the style guide. I would love to see React have an officially supported and maintained style guide.

Hopefully I've opened your eyes to some things that you didn't know Vue.js did! I was certainly surprised to find myself really enjoying the way Vue.js did things!
