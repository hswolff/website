---
title: Use React.lazy and Suspense to Code-Split Your App
postSlug: react-lazy-and-suspense
date: 2018-12-02
category: code
tags:
  - react
---

The marquee feature of [React 16.6.0](https://reactjs.org/blog/2018/10/23/react-v-16-6.html) was the introduction of `React.lazy`, a built in way to do code-splitting with React.

In all honesty I was hoping to have had this article written about two weeks ago, but in an entirely ironic and unintentional sequence of events that didn't happen because I got lazy. Well that's not truly fair to say - more so that I ran out of time and rather than stay up till 2am one night I decided that getting a good night sleep would be in my best interest. Or put another way, I got lazy. Who needs sleep? (sarcasm)

So back to the topic at hand: `React.lazy` lets you lazily load components via code splitting in a React aware manner. Let's break down what each of those things mean.

And before I delve into lines and lines of text, let me give you the fun option of watching me teach you in video form. I'm entertaining, educational, and above all else it keeps with the spirit of this topic. You can be lazy and rest your mind and let me dance around your computer screen in video form.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/SGSAPfjOHBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

# Code-splitting

Back in the old days of web development people would concat their JavaScript files together and ship that off to the browser. It was the professional's solution towards shipping JavaScript applications to the browser and well...it was as good as it got back then.

Nowadays people use module bundlers such as [Webpack](https://webpack.js.org/) or [Parcel](https://parceljs.org/) to do the same thing we used to just in a much more high brow manner. Instead of simple file concatenation we can now use module systems such as CommonJS (`require`, `module.exports`) or ES Modules (`import`, `export`) to define the dependencies between files.

This is great however sometimes these web applications get mighty large and it gets mighty heavy to send all that JavaScript to a person's browser all at once. I've seen some JS bundles north of 10MB - and that ain't no load that I want to lift on every page refresh.

So the solution to that problem is to code-split an application. Rather than including all dependencies up front, we can actually tell our module bundler that in some places it's ok to be lazy, that we can chill, kick up our feet, rest a while. We effectively tell our module bundler that we have some parts of our application that is aggressively chill and can be sent to the browser lazily and barefoot (barefootedness, as you know, is the strongest display of laziness).

Here's some code that sends everything to the browser at once:

```js
import Description from './Description';

function App() {
  return (
    <div>
      <h1>My Movie</h1>
      <Description />
    </div>
  );
}
```

Now how do we tell our module bundler to lazily load that module?

## [Dynamic import proposal](https://github.com/tc39/proposal-dynamic-import)

This proposal adds a new feature to ES Modules that allows us to define our code dependencies asynchronously.

The `import` statement can now be used as a function which returns a Promise that resolves to the module that is being requested.

To use that feature requires just a small change.

```diff
-import Description from './Description';
+const Description = import('./Description');
```

What this change in dependency declaration tells Webpack or Parcel is that module, `Description` is no longer needed right away - we can wait to load it at a point in time when the application needs it.

And what that lets the module bundler do is create a separate `.js` file that contains the lazily loaded module.

And that's what we call _code-splitting_.

> What was once 1 file is now 2. It's been split, and that has made all the difference.
>
> - [_Robert Frost_](https://www.poetryfoundation.org/poems/44272/the-road-not-taken)

However that story is just the beginning for us wanting to code-split React Components.

# Lazy Loading React Components

Now that we've defined our code-split location we now have some homework to do to properly render the component.

We have to call the `import()` function, wait for the `Promise` to resolve, and then take that value and render that in our component.

It's a lot of book-keeping which tends to be redundant and error prone.

It looks more or less like this to fully lazily load that component.

```js
// We make this a function so we don't start loading
// this lazily loaded module on page load.
// Which would kind of defeat the point of lazy loading.
const LoadDescription = () => import('./Description');

class App extends React.Component {
  state = {
    Description: null,
  };

  componentDidMount() {
    LoadDescription.then(Description => {
      this.setState({ Description: Description.default });
    });
  }

  render() {
    const { Description } = this.state;
    return (
      <div>
        <h1>My Movie</h1>
        {Description ? <Description /> : 'Loading...'}
      </div>
    );
  }
}
```

Luckly for us React developers there's a very popular and well maintained library that already does this for us called [react-loadable](https://github.com/jamiebuilds/react-loadable).

It works, it's great, I use it, I recommend it.

It removes all that boilerplate so all you have to write is:

```js
import Loadable from 'react-loadable';

const LoadableDescription = Loadable({
  loader: () => import('./Description'),
  loading() {
    return <div>Loading...</div>;
  },
});

function App() {
  return (
    <div>
      <h1>My Movie</h1>
      <LoadableDescription />
    </div>
  );
}
```

Aaaaah...so much better.

So then why are we talking about `React.lazy`?

# Suspense

One main drawback of `react-loadable` is that it works on a per-component basis. What I mean by that is for every individual component that you may want to lazily load you have to define its own discrete loading state. Sure you can use a common component so that all your loading states look the same but that's the issue - you're going to see a loading state for every individual component that is lazily loading.

So if I had multiple lazily loaded components it's possible I may see three, or four, or nine-thousand spinners on my page before all those extra JS bundles are downloaded, parsed, and executed.

That's not the best user experience.

That's also the bad user experience that `React.lazy` solves.

`React.lazy` is built to be used in tandem with a `Suspense` component. `React.lazy` is essentially the same thing as `react-loadable`, however instead of defining all your loading states on every `React.lazy` usage, you define it on the `Suspense` component.

What that means is you can have as many `React.lazy` components as you want, but you'll only ever see the one loading state on the `Suspense` component.

Not only that, but your `React.lazy` components can be placed at any depth in your React component tree. So any far removed, remote child component can be lazy and `Suspense` will still handle that case in one nice and neat location.

(If you're curious the way this works is similar to how the [Error Boundaries](https://reactjs.org/docs/error-boundaries.html) work in React, which itself is similar to how try/catch works in JavaScript. It's turtles, just [turtles all the way down.](https://en.wikipedia.org/wiki/Turtles_all_the_way_down))

So let's take a look at how we'd use `React.lazy` using our same super verbose and complex example (sarcasm (gosh I wish sarcasm translated better online (just like how I wish writing asides to my own writing worked better then just nesting parenthesis (what is this, Lisp?))))

```js
import React, { Suspense } from 'react';
const Description = React.lazy(() => import('./Description'));

function App() {
  return (
    <div>
      <h1>My Movie</h1>
      <Suspense fallback="Loading...">
        <Description />
      </Suspense>
    </div>
  );
}
```

🤓 Neat!

`Suspense` component will catch any `React.lazy` instances and then render just the one fallback component.

So if we had the following, we'd still only render one fallback component.

```js
import React, { Suspense } from 'react';
const Description = React.lazy(() => import('./Description'));

function App() {
  return (
    <div>
      <h1>My Movie</h1>
      <Suspense fallback="Loading...">
        <Description />
        <div>
          <span>Cast</span>
          <AnotherLazyComponent />
        </div>
      </Suspense>
    </div>
  );
}

// AnotherLazyComponent.js (imagine in another file)
const AndYetAnotherLazyComponent = React.lazy(() =>
  import('./AndYetAnotherLazyComponent')
);

function AnotherLazyComponent() {
  return (
    <div>
      <span>So...so..lazy..</span>
      <AndYetAnotherLazyComponent />
    </div>
  );
}
```

But where things get _really_ neat is if we use additional `Suspense` components to further customize how we want to show our loading state.

Through the power of React and the sweet wonders of declarative programming the flexibility of UI behavior is put into our hands so that we can decide easily and without much effort where we want to handle and show fallback components.

So let's say we want to highlight how lazy our `AnotherLazyComponent` is. We can do that via:

```js
function App() {
  return (
    <div>
      <h1>My Movie</h1>
      <Suspense fallback="Loading...">
        <Description />
        <div>
          <Suspense fallback="Sorry for our laziness">
            <span>Cast</span>
            <AnotherLazyComponent />
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
}
```

In this example we've broken up our fallback handling into two separate `Susepense` components. When our `AnotherLazyComponent` starts to load we'll show our apologetic fallback message.

What this also means, which is even more powerful and exciting, is if `AnotherLazyComponent` takes a long time to load it will no longer affect the rest of the components being rendered. We've essentially cordoned off `AnotherLazyComponent` and all its children and prevented its lagginess and supreme laziness from slowing down the rest of our application.

React will show "Sorry for our laziness" until `AnotherLazyComponent` and its children have loaded and rendered, but React will show `Description` as soon as it is loaded and rendered - and _not wait for `AnotherLazyComponent`_.

Compare this to the previous example without the second `Suspense` component. In that scenario React would have waited for **every** lazily loaded child component to load and render before showing anything.

We've decided which components we want to show as soon as we can, and which we're ok to show later.

It's a hard concept to really understand in written word, so I would suggest you checking out my video posted above to get a feel for what I mean.

If you don't then just take my word for it: it's cool to be lazy.

# Conclusion

`React.lazy` takes practices and libraries that have already existed in the ecosystem and codified them as a best practice by providing first-party support.

This is a wonderful step forward for React and is an example of what it does best: make hard things simple and simple things...verbose. That's a joke. But it's a joke based on truth (those make the best types of jokes).

I'd be remiss not to mention Async or Concurrent React. Those two words have been bandied about with Suspense and make no bones about it, Concurrent React will leverage the `Suspense` component but that's a blog post for another time. As in when it's done and released. But yes, you eagle eyed reader, `Suspense` is an overture on bigger things to come. For now the React team is starting on a wonderfully lazy foot.

If you're using React 16.6.0 or later you can start using `React.lazy` and `Suspense` now! And I'd encourage you to do so if you're interested! It's definitely a power user feature and not something that every application developer will need right away. But it's there for you to use and play with.

If you have played around with it I'm curious to hear your thoughts.

Or better yet, share your experiences with me in video form. Cuz that's the laziest way for me to consume that info, and I want to do my best to keep in the spirit of the feature at hand.
