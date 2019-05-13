---
title: Level Up useReducer with Immer
slug: level-up-usereducer-with-immer
date: 2019-05-10
category: code
tags:
  - react
  - hooks
  - immer
---

If you're just joining us, this post is an add-on to my [Why I Love useReducer](blog/why-i-love-usereducer/) post. If you haven't read that already, I recommend you take a second and have a peek before you continue reading this post!

So, now that we all agree that `useReducer` is the best thing since the wheel, let's talk about how we can make it even better. I'm talking better than a wheel. Like, individually wrapped slices of cheese better.

One of the things that `useReducer` excels at is handling complex state tree mutations. If you have a lot of state going on in your component, then `useReducer` is going to help you wrangle it under control such that you know how your state is changing.

The one gotchya here is that for `useReducer` to work correctly it requires you return a new instance of state to signal to React that data has changed and it needs to re-render.

What that means is a lot of code in `useReducer` functions that look like this:

```js
case 'submit':
    // Return a new object, so React knows things changed
    // Which means you have to manually...
    return {
        // Copy over state
        ...state,
        // Set new state value
        isSubmitting: true,
    }
```

This works fine, however if your state tree gets heavily nested it becomes increasingly more difficult to remember to copy over values when making a new object instance.

```js
case 'addTeamMember':
    return {
        // Copy over root state
        ...state,
        teams: {
            // Copy over teams so we don't just replace it
            ...state.teams,
            [teamId]: {
                // Also copy over this team's data
                ...state.teams[teamId]
                // And then add the new data
                [userId]: newUser,
            }
        }
    }
```

This level of manually copying over an object sucks.

Luckily there's a library that makes this easy.

It's called [Immer](https://github.com/immerjs/immer) and I love it.

# Video

FYI this post is also in video form!

See my teach you about using Immer in `useReducer`, rather than you read these words and teach yourself! Don't put me out of a job, let me teach you! I love to talk, truly!

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/PjsGz6sNG3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

# Immer

Immer let's you make immutable copies of objects via a mutable API.

That's my most succinct explanation for what Immer is, and why it's awesome.

Rather than having to deal with immutable data structures (i.e. [ImmutableJS](https://immutable-js.github.io/immutable-js/)) or fancy Babel transforms that deal with [ASTs](https://en.wikipedia.org/wiki/Abstract_syntax_tree), Immer uses the very neat and clever idea of [copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write).

Essentially what that means is Immer tracks every mutable change you're making, and Immer will then replay those changes producing a new immutable copy of your object with all those changes applied.

# What's it look like?

Immer has two primary ways of using it.

## Function

The most common way of using Immer is via calling its function.

By convention the function is called `produce`, as it produces the next state.

The first argument to `produce` is the object you want to mutate.

The second argument is a function that is called with that same object you want to mutate, except it's been modified slightly by Immer. It's actually been wrapped in a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) so that Immer can track all the modifications you make.

When your function finishes, Immer will go through all the changes you created, re-apply them to your original state object in an immutable manner, and produce your new immutable object.

```js
import produce from 'immer';

const state = {
  team: {
    teamFoo: {
      harry: {},
    },
  },
};

const newState = produce(state, draft => {
  draft.team.teamFoo.matthew = {};

  draft.team.newTeam = {
    joel: {},
    adam: {},
  };
});
```

`newState` is a new object with all those changes applied.

## Curried

The curried API Immer inverts the arguments (as most curried APIs do). Rather than the first argument being the object you wish to modify, it becomes the function that tells Immer how you want to modify the object.

What Immer returns then is a new version of your update function that is wrapped in the `produce` function.

Taking the example from above

```js
function updater(draft) {
  draft.team.teamFoo.matthew = {};

  draft.team.newTeam = {
    joel: {},
    adam: {},
  };
}

const curriedUpdater = produce(updater);

const state = {
  team: {
    teamFoo: {
      harry: {},
    },
  },
};

const newState = curriedUpdater(state);
```

That `curriedUpdater` function is roughly equivalent to:

```js
const curriedUpdater = (state, ...args) => {
  return produce(state, draft => {
    updater(draft, ...args);
  });
};
```

Such that you can now call `curriedUpdater` and it'll automatically wrap the original `updater` function with `produce` so that all mutations produce immutable copies.

# Use Immer with useReducer

So how does this apply to `useReducer`?

As we already saw above we have to make deeply nested changes to our state objects so that React knows it should re-render.

We saw that ugly example of copying over state above.

```js
case 'addTeamMember':
    return {
        // Copy over root state
        ...state,
        teams: {
            // Copy over teams so we don't just replace it
            ...state.teams,
            [teamId]: {
                // Also copy over this team's data
                ...state.teams[teamId]
                // And then add the new data
                [userId]: newUser,
            }
        }
    }
```

How does that look like using Immer?

```js
case 'addTeamMember':
    return produce(state, draft => {
        draft.teams[teamId][userId] = newUser
    });
```

Just a little easier.

## Curried useReducer Reducer Function

And if we use the curried API from Immer we can easily have our entire `useReducer` reducer function leverage the powers of Immer:

```js
// Calling first argument draft instead of state as it's the immer draft object.
function reducerFunction(draft, action) {
  // reducer code goes here.
}

const curriedReducerFunction = produce(reducerFunction);

useReducer(curriedReducerFunction, initialState);
```

Everytime `useReducer` runs it will call `curriedReducerFunction` with the current state and the action object.

However since we provided the curried function that means immer will run before it makes its way to our actual `reducerFunction`, such that all the `reducerFunction` ever gets is the `draft` object from Immer!

# Did you level up?

One thing to keep in mind before you go around converting all your reducer functions to use Immer is that you don't always need Immer. If you have a shallow object then copying over state yourself is _perfectly fine_.

In fact I'd encourage you to only reach for Immer if you have a deeply nested and complex object. That's where the benefits of Immer truly come into play. That's where it'll help you write more maintainable and bug-free code.

Don't rush to use Immer, know when it's appropriate to reach for this powerful tool.

However when you do use Immer I think you'll have a great time. It makes state updates easy and clear to any reader what you're doing.

Also you don't have to worry about forgetting to copy over state anywhere, Immer will handle that all for you.

Immer is actually better than both the wheel and individually sliced cheese. It's so good it's just like an individually wrapped cheese wheel.
