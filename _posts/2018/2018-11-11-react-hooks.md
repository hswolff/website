---
title: React Hooks
slug: react-hooks
date: 2018-11-11
category: code
tags:
  - react
---

React Hooks! Hooks! Hooks! Hooks!

Sorry, had to yell that a few times to get it out of my system.

I definitely find React Hooks to be one of the most exciting new features that has hit React in a long time. I don't think I've been this excited about a new feature since React Fragments and that was way back in the initial React v16.0.0 release..._last year_. So I guess that means I haven't been excited about React for an entire year? That's not true, but if it gets you to read the rest of this post then let's say it is.

# What is React Hooks?

Let's steal from the official docs as they say it best:

> Hooks are a new feature proposal that lets you use state and other React features without writing a class.

So what does that mean?

Before React Hooks you had the following ways to write a React Component:

- Class Component: This is everyone's tried and true, most favorite, most popular, way of writing a React Component. It is the most full featured way of writing a React Component as it gives you access to a render method, lifecycle methods so (you can plug into events of the React rendering lifecyle), and most importantly, they can have their own local state.

```javascript
class MyComponent extends React.Component
    state = {
        ofMind: 'Alica Keys',
    };

    componentDidUpdate() {
        console.log("I'm the 'life' of the party, and I 'cycle' around.");
    }

    render() {
        render <h1>Oh Wowwwww</h1>;
    }
}
```

- Pure Class Component: Just like our favorite Class Component this has a built in optimization to only re-render your component if your state and props change.

```javascript
class MyComponent extends React.PureComponent
    state = {
        ofPurity: 'Purell for Clean Hands',
    };

    componentDidMount() {
        console.log("I still have lifecycle support!");
    }

    render() {
        render <h1>But now I only change if my `state` and `props` do!</h1>;
    }
}
```

- Function Component: Don't care about lifecycles? Not worried about local state? Only care about UI? This is your sweet spot, letting you create a nice and simple component that just renders UI. Best of all? It's just a function!

```javascript
function IAmAComponent() {
  return <h2>But I'm just a function!</h2>;
}
```

- Pure Function Components: [Fresh off the presses with React 16.6.0](https://reactjs.org/blog/2018/10/23/react-v-16-6.html) you can now use `React.memo` to replicate the functionality of a Pure Class Component with a memoized Function Component. Before `React.memo` you couldn't optimize the performance of a function component, and if you wanted to you'd have to refactor the component into a Class Component. Well, no longer!

```javascript
React.memo(function IAmMemo() {
  return <h2>Ized, Ized, Baby</h2>;
});
```

So I count 4 ways of writing a React Component, split into two camps.

You can write a component as a Class or as a Function. However if you write a component as a function you're unable to have local state or access lifecycle methods. If you need those two features you have to refactor your component into a Class.

That is, until now.

React Hooks fills that hole. With React Hooks you can now have local state and access lifecycle behaviors in a function, letting you have the full expressive power of a React component and retain the nice brevity of a function.

That alone is what I'm most excited about. The fact I can now have local state in a Function Component is so lovely it makes me want to kiss my code editor. Not sure what good that'll do me, but well, just wanted to show you my level of affection.

# Enough talk, show me the code!

Honestly I encourage you to read the [official React docs on Hooks](https://reactjs.org/docs/hooks-overview.html) as they've done an incredible job refining and honing the concepts and ideas that you should know in order to learn and understand Hooks.

However, you're on my blog, so I'll take a crack at explaining Hooks as well.

And in fact, if you're tired of having to read words on a page, you can even go onto my YouTube channel and watch me explain Hooks in video form. Think of it as me shoving words into your brain rather than you pulling the words from my blog into your eyes. Weird way to describe that, sorry about that.

## Learn Hooks with Video

I have three videos that give you a great introduction to learning about Hooks.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/jd8R0a2Ur8Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/fnT5b2u1PHE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/YKmiLcXiMMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

React Hooks are a set of primitive APIs that allow you to, uh, _hook into_ React from your Function Component.

These APIs are plain functions that do what they are named. Which is something I always respect, when a function is named after what it does.

## useState

If you want to use state in a Function Component you can do so via the `useState` hook:

```javascript
function CounterFunction() {
  const [count, incrementCount] = useState(0);

  return (
    <div>
      Current count: {count}
      <button onClick={() => incrementCount(count + 1)}>Increment</button>
    </div>
  );
}
```

`useState` takes one argument, which is the initial value for that state. Something to highlight here is that `useState` can take any type of data - it can be a primitive, an object, or an array. This is a big difference to how state works on a Class Component. On a Class Component state is _always_ an object, and you put things on that object. If all you want to keep track of in a function is a number, you can just have state be an integer. This makes things so much simpler in my opinion as React is no longer prescribing how you should be desiging your application.

`useState` returns an array with two items. The first is the current value stored in state, and the second is a function that lets you update the state. The convention being put forth by the React core team is to use [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) to make the developer experience a little more pleasant.

So instead of doing this:

```javascript
const state = useState(0);
const count = state[0];
const incrementCount = state[1];
```

You destructure the values in the array directly:

```javascript
const [count, incrementCount] = useState(0);
```

Makes for a much better time.

Also what's nice about having the values be in an array is you can name them whatever is relevant to your function. So if you're storing text you can have it be:

```javascript
const [name, setName] = useState('Harry');
```

Or whatever else makes sense.

The updater function, which is the second item returned in the array (in our case `incrementCount` and `setName`) lets you update your state value. What I find interesting about this function is that you can update your state with whatever you want. So even though you may have begun your state as a number, there's nothing stopping you from setting it to a string, or an array, or an object. Nothing except the sanity of your co-workers, or yourself in six month time when you read your code and scratch your head wondering why you changed a number to a string and then tried to `Object.keys` on the string and you're curious why you never had a bug show up in this piece of code and you start questioning if JavaScript even makes sense anymore.

Woah, sorry, that got a little intense at the end there.

But in any case, that's `useState`.

## useEffect

`useEffect` is the Hooks' answer to lifecycle methods. What I find personally super powerful about `useEffect` is that it gives you the power of lifecycle methods without requiring you learn the internals of React.

`useEffect` takes up to two arguments. The first argument is the effect you want to run. It's the piece of functionality that you would have normally put in `componentDidMount` or `componentDidUpdate`.

The second argument is optional. If present, it's an array of values that `useEffect` uses to decide when to re-run the function given in the first argument.

If you don't provide a second argument then `useEffect` will re-run your effect after each render of your React Component. The React Core team decided on this default behavior after very careful consideration. By having it run on every render you can rely on behavior that is most intuitive and consistent.

However it may not be the most performant. And that's where the second argument comes in.

Let's look at an example:

```javascript
function MyComponent({ userId }) {
  const [repos, setRepos] = useState([]);

  useEffect(
    // This is our effect. It fetches data from the GitHub API
    // and then updates our local state when the Fetch resolves.
    () => {
      fetchGitHubRepos(userId).then(repos => {
        setRepos(repos);
      });
    },
    // This is the second argument to `useEffect`. We're passing
    // in the `userId` value which is a prop given to this component.
    // When that value changes, then we'll re-run our effect.
    // Without this value we would have refetched the GitHub API
    // everytime this component re-rendered. That would be no good.
    [userId]
  );

  return (
    <div>
      {repos.map(repo => (
        <div>{repo.name}</div>
      ))}
    </div>
  );
}
```

There's a third usage of `useEffect` and it's bundled into the effect function.

If you return a function from the effect function (the function given as the first argument) then React will call that function before it re-runs your effect, or when the Function Component is being removed from the page.

This is basically the same functionality as `componentWillUnmount` lifecycle method. But in Hook form.

## More Hooks

There's many more Hooks that I'm not going to delve into right now.

I cover a few more in my [Advanced Hooks Video](https://www.youtube.com/embed/YKmiLcXiMMo). So if you are interested then please check that video out.

What other Hooks are there?

- `useReducer`: Did someone put Redux into React?
- `useContext`: An easier-to-use API for consuming Context values.
- `useMemo`: To cache expensive values and not have to re-compute them every time. For example, an expensive client-side filter function.

...and more!

[Check the Hooks API Reference Docs for the full list](https://reactjs.org/docs/hooks-reference.html).

## Custom Hooks

It would truly do you a disservice if I didn't talk about Custom Hooks. It's simultaneously the biggest strength of Hooks whilst having the most understated API.

Custom Hooks, as described from the React docs page:

> Building your own Hooks lets you extract component logic into reusable functions.

So let's take our previous GitHub fetch example above and extract that functionality into a custom Hook.

A Custom Hooks is just a function that starts with `use` and contains other Hook calls. That's it. It's pretty sweet.

```javascript
function useGitHubRepoAPI(userId) {
  const [repos, setRepos] = useState([]);

  useEffect(
    () => {
      fetchGitHubRepos(userId).then(repos => {
        setRepos(repos);
      });
    },
    [userId]
  );

  return repos;
}

function MyComponent({ userId }) {
  const repos = useGitHubRepoAPI(userId);

  return (
    <div>
      {repos.map(repo => (
        <div>{repo.name}</div>
      ))}
    </div>
  );
}
```

What this means is I can now fetch data from GitHub anywhere I want and all that logic and state is encapsulated within the Custom Hook.

Think of other things that require lifecycle methods and use state.

Such as [`useOnClickOutside`](https://codesandbox.io/s/23jk7wlw4y). Bind to global clicks and call a callback when a click occurs.

Or [`useWindowSize`](https://codesandbox.io/s/jj61r2w6z5). Call it to get back the current size of the window and that value updates as the window updates.

The possibilities are literally limitless.

And they'll make writing applications so much easier.

# Where can I use Hooks?

You can only use Hooks within a Function Component. Which is kind of an interesting move by the React core team. I'm sure it wasn't intentional but it is funny that they provide some really great functionality via Hooks and restrict its usage to only Function components, a historically hobbled part of the React ecosystem.

In this weird twist of fate Function Components have gone from the red-headed-step-child of React to now one of the most powerful and expressive parts of it.

Funny how things change.

# When can I use Hooks?

Today! They are officially released in React `v16.8.0`. If you want to play around with them then install that version of React and React DOM: `npm install --save react@v16.8.0 react-dom@v16.8.0` and you'll be on your merry way.

# Conclusion

React Hooks are very exciting.

I believe I saw someone describe Hooks as a new primitive that exposes an entirely new way of writing React applications. I whole-heartedly agree with that description.

Hooks opens up an entirely new way of writing React apps by letting you access core React functionality and being able to share that functionality via Custom Hooks.

I'm personally excited about the next new React app I work on. I think writing an entire React application using only Function Components and Hooks is going to unlock all new design patterns and new ways of code-reuse that should make the application both faster to develop, and easier to maintain.

That's the holy grail isn't it? A developer experience that is fast and easy. Hard to obtain but us developers are always trying to get closer to that ideal.

I think Hooks is a very strong step towards that ideal. At least it is within the context of React. I won't truly know until I play with Hooks more.

For now, I know that I'm..._hooked_... on React Hooks. It had a great lure and I've bitten right into what it's selling.

Hopefully I got you interested as well. Or at the very least cleared up some confusions as to what the heck React Hooks is and why people can't stop making puns about the name.

To that, I'm guilty as all the rest.
