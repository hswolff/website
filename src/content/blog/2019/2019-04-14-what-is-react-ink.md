---
title: What is React Ink?
postSlug: what-is-react-ink
date: 2019-04-14
category: code
tags:
  - react
  - cli
---

The first time I learned about [React Ink](https://github.com/vadimdemedes/ink) I was immediately intrigued. A project that lets me take all my React knowledge and use it to make a CLI program? Sounds great to me!

In this video we'll explore what React Ink is and what you can do with it. We'll get up and running from a blank project and get our own React Ink project working locally.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/bk1tmNKtXBo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

However, I know some people prefer to read rather than write, so for all of you that prefer to use your eyes, keep on reading.

[Or if you prefer to just see the code, then by all means click on through.](https://github.com/hswolff/youtube/tree/master/videos/what-is-react-ink)

## What is React Ink?

React Ink lets you write CLI programs using React. That's the most "to the point" explanation that I can come up with. However let's delve into what that means.

If you're writing a regular website with React you need to use two things: [React](https://reactjs.org/docs/react-api.html) and [React DOM](https://reactjs.org/docs/react-dom.html). Often these two things are conflated because 99% of the time you're using them together without realizing it. However there is an important distinction between these two libraries (and yes they are two separate npm packages).

React is the package that you use to write React Components. The components you write with React describe what they do and how they look. You can make a custom `Button` component and that can be reused in any of your other components. You can listen to lifecycle hooks and react to updates.

React DOM is how your React Components come to life. It's the library that translates your abstract descriptions of your React Components into actual DOM elements in a browser. In React ecosystem parlance it's called a 'renderer'. There are many renderers for React. React DOM is one. React Native is another. It'll take your React code and then render it into a native app.

React Ink is also a renderer. It'll take your React Components and render it into a terminal. Granted, you need to use the components that React Ink provides, so that the React Ink renderer knows how to transform that into a CLI, but this separation of concerns, of describing your application (React) to then rendering your application (React DOM / React Native / React Ink) is one of the fundamental strengths of the React architecture.

## What does React Ink look like?

React Ink comes with a few built in components that let you create your CLI program. You can [see the full list here](https://github.com/vadimdemedes/ink#built-in-components) but let me highlight a few of the ones that I've played around with:

### [Box](https://github.com/vadimdemedes/ink#box)

Essentially a `<div />` for the CLI. It lets you position elements in your terminal to make your CLI program look as pretty as possible.

You may wonder how you actually handle layout in a CLI if there's no CSS? Well `Box` supports properties that let you control layout. Props such as `height` and `padding` and all related flex properties. Essentially anything you'd need to create a layout `Box` should have you covered.

### [Color](https://github.com/vadimdemedes/ink#color)

A CLI is boring if it's all white text on a black background. Luckily the `Color` component lets you add some flair to your CLI. Via some props you can make an otherwise boring CLI look pretty with shades of blue.

```js
<Color rgb={[255, 255, 255]} bgKeyword="magenta">
  I am pretty!
</Color>
```

### Everything else

This is just a very small sample of what Components are availabe for your use.

And if that's not enough you can always write [your own custom Ink Component](https://github.com/vadimdemedes/ink#useful-components). There's already a handful available in the community and it's never too late to create your own.

## It's Just React™

Outside of having to use React Ink Components, everything else is just React. Which means you can use Class Components with state or Function Components with Hooks. You can use Fragments and you can use regular event handlers. It's Just React!

For example there's a [text input component](https://github.com/vadimdemedes/ink-text-input). If you want to get input from someone in the CLI this is how you'd do it:

```js
import React from 'react';
import { render, Box } from 'ink';
import TextInput from 'ink-text-input';

class Greeting extends React.Component {
  state = {
    name: '',
  };

  onChange = name => {
    this.setState({ name });
  };

  render() {
    return (
      <Box>
        <Box marginRight={1}>
          <Color blue>Hello!</Color>
          What's your name?
        </Box>

        {this.state.name ? (
          <Color green>Hello {this.state.name}</Color>
        ) : (
          <TextInput value={this.state.name} onChange={this.onChange} />
        )}
      </Box>
    );
  }
}

render(<Greeting />);
```

Looks just like a React app doesn't it?

## Wrap-up

This is just the beginning of exploring what you can do with React Ink.

This is also why I love React. It lets you take all your current React knowledge and apply it in an entirely new context. It really lets React stay true to its mantra of being a framework that you learn once, write everywhere.

If you've ever tried to write a nice CLI yourself you know that it's not a pleasant experience. Adding React into the mix suddently makes it fun again. I'm very excited to see what you come up with!
