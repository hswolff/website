---
title: Why I Love useReducer
slug: why-i-love-usereducer
date: 2019-05-03
category: code
tags:
  - react
  - hooks
---

This post is the first of a trilogy. Check out the other two posts as well:

- [Level Up useReducer with Immer](/blog/level-up-usereducer-with-immer/)
- [How To useContext With useReducer](/blog/how-to-usecontext-with-usereducer/)

I didn't realize until recently how much I loved the [React Hook useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer). It's one of those advanced hooks, and while I read the documentation about it and already have a good amount of experience with [Redux](https://redux.js.org/), it took a little while for me to fully understand just how powerful `useReducer` can make your components.

I made a video about this. To show my love for `useReducer`. I encourage you to take a watch. The first 10 minutes are me setting the scene. Together we're building a pretty generic Login Form, one that has been written countless times. In the first half of the video I make the component using multiple `useState` calls, as I normally would with a React Class Component.

Then at around the 11 minute mark I start migrating my code to use `useReducer` instead - and the fireworks fly!

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/o-nCM1857AQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[All source code is available on GitHub.](https://github.com/hswolff/youtube/blob/master/videos/why-i-love-usereducer/src/LoginUseReducer.js)

# Why do I love useReducer?

The simple answer is that it lets you separate the _What_ from the _How_. To expand upon that, it may be that _What_ a user wants to do is `login`.

With `useState` when a user wants to `login` I create function that handles a lot of the _How_. _How_ my component has to behave when a user wants to `login`:

- Sets `loading` to true
- Clears out old `error` state
- Disables the button.

With `useReducer` all my component has to do is think about _What_ the user wants. Which is:

- `dispatch('login')`

After that all the _How_ is handled inside the `loginReducer` function.

Furthermore, any future _How_ questions become completely centralized inside of that one `loginReducer` function. My component can just keep on thinking about the _What_.

It's a subtle distinction but an extremely powerful one.

To further show the point [you can check out the full source code here](https://github.com/hswolff/youtube/tree/master/videos/why-i-love-usereducer) or see these inline examples.

I'm going to ignore showing the UI, if you want to see that you can check out the repo. For now I just want to focus on the data we're storing and updating.

# Using useState

Here I have 5 calls to useState to manage all the distinct state transitions.

In my `onSubmit` call I have to careful orchestrate all the state changes that I want.

They're tightly coupled to the onSubmit handler and awkward to extract.

```js
function LoginUseState() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, showLoader] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    setError('');
    showLoader(true);

    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError('Incorrect username or password!');
      showLoader(false);
      setUsername('');
      setPassword('');
    }
  };

  return; // remaining UI code here
}
```

# Using useReducer

While it may be overall longer, I would argue that it's much easier to read and track what's going on.

If you jump straight to the `onSubmit` function I can now clearly show the intent of the user. There's only 3 behaviors that can happen, 'login', 'success', and 'error'. What that means is not a concern of my component, it's all handled in the `loginReducer`.

Even better, it becomes easier for me to make wide-ranging changes to state changes because all the state changes are centrally located.

And even more exciting is that all state changes become easy to share by default.

If I want to show my error state from elsewhere in the component I can easily re-use the same `dispatch({ type: 'error' })` and I'm good to go.

```js
function LoginUseReducer() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async e => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      await login({ username, password });
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  return; // UI here
}

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case 'login': {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
      };
    }
    case 'logOut': {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};
```

# Think like the user

`useReducer` gets you to write code the way a user will interact with your component.

You are encouraged to think in the _What_ and centralize all _How_ questions inside the reducer.

I'm so excited `useReducer` is now built-in to React. It's one more reason why I love it.
