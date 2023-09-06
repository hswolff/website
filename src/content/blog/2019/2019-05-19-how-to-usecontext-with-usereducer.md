---
title: How To useContext With useReducer
postSlug: how-to-usecontext-with-usereducer
date: 2019-05-19
category: code
tags:
  - react
  - hooks
---

Welcome back to the last installment of our mini-course on `useReducer`!

If this is your first time here I recommend you check out the first two posts in this series:

- [Why I Love useReducer](/blog/why-i-love-usereducer/)
- [Level Up useReducer with Immer](/blog/level-up-usereducer-with-immer/)

Today's post rounds out this trilogy. Today we learn about `useContext`, and how it makes your usage of `useReducer` flexible for any size application.

`useContext` is of course the React Hook way to consume [React Context](https://reactjs.org/docs/context.html). It's a way to share data to any descendent component without having to manually pass the props through every intermediary component. Sometimes known as [prop drilling](https://kentcdodds.com/blog/prop-drilling).

Before we get too far into the weeds I want to let you know this blog post is also in video form. Have a watch if you prefer that format.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/StABs9JxeNE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Also all source code is available on GitHub.](https://github.com/hswolff/youtube/blob/master/videos/why-i-love-usereducer/src/LoginWithContext.js)

# Why do I need Context?

The [React docs](https://reactjs.org/docs/context.html) have a wonderful and succinct explanation:

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Example usually help me understand things best. Notice in this example how we have to pass both `dispatch` and `isLoggedIn` to `TodoPage` so that it can then in turn give it to each `TodoItem`.

What's unfortunate about this is that `TodoPage` has no need for `dispatch` or `isLoggedIn`. The only reason it's being given those values is so it can pass it along. This is props drilling.

```js
export default function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { todos, isLoggedIn } = state;
  return (
    <div className="App useContext">
      <TodoPage todos={todos} dispatch={dispatch} isLoggedIn={isLoggedIn} />
    </div>
  );
}

function TodoPage({ todos, dispatch, isLoggedIn }) {
  return (
    <div className="todoContainer">
      <h2>Todos</h2>
      {todos.map(item => (
        <TodoItem
          key={item.title}
          dispatch={dispatch}
          isLoggedIn={isLoggedIn}
          {...item}
        />
      ))}
    </div>
  );
}

function TodoItem({ title, completed, dispatch, isLoggedIn }) {
  const isLoggedIn = true;
  return (
    <div className="todoItem">
      <p>{title}</p>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onClick={() => {
            if (!isLoggedIn) {
              alert('Please login to click this!');
            }
          }}
          onChange={() => {
            if (isLoggedIn) {
              dispatch({ type: 'toggleTodoCompleted', payload: title });
            }
          }}
        />
      </div>
    </div>
  );
}
```

# How Context Helps

Context removes the need for us to pass props to components that don't need it. It essentially lets some parent component expose a value to any descendent component. The big thing about context is the descendent doesn't have to be an immediate child, it can be as deep in the React component tree as you like.

This is essentially the third way you can store and share data in React. There's state, props, and context. Context isn't something that you should feel the need to use frequently, however knowing it exists, and knowing why you might want to use it, is extremely valuable to have in your toolbox.

# How to Create a Context

There is one way to create a context in React. It's via the top-level React API:

```js
const MyContext = React.createContext();
```

The object given back has two properties on it, `MyContext.Provider` and `MyContext.Consumer`.

`MyContext.Provider` is how you establish the root of a context environment. It's what allows any descendent component to consume the data stored on the context. It accepts one prop `value` and that is what context consumers can access.

```js
const MyContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { todos, isLoggedIn } = state;
  return (
    // Note: This current way of exposing these values can lead to unexpected bugs.
    // We'll talk about this later in the post why writing `{state, dispatch}` can
    // lead to performance issues.
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App useContext">
        <TodoPage todos={todos} dispatch={dispatch} isLoggedIn={isLoggedIn} />
      </div>
    </MyContext.Provider>
  );
}
```

# How to Consume Context with Hooks

There are actually three different ways you can consume a context in React. For the purposes of this blog post I'm only going to discuss how we do it with Hooks.

There's a built-in Hook provided by React called `useContext` that allows any descendent component to gain access to the value on a Context Provider. It also subscribes the component that uses `useContext` to be re-rendered anytime the value of the context changes.

`useContext` takes in one argument which is the object that's returned when we originally called `React.createContext`. This tells React which context value we want.

```js
function TodoItem({ title, completed }) {
  const { state, dispatch } = useContext(MyContext);
  const { isLoggedIn } = state;
  return (
    <div className="todoItem">
      <p>{title}</p>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onClick={() => {
            if (!isLoggedIn) {
              alert('Please login to click this!');
            }
          }}
          onChange={() => {
            if (isLoggedIn) {
              dispatch({ type: 'toggleTodoCompleted', payload: title });
            }
          }}
        />
      </div>
    </div>
  );
}
```

Now `TodoItem` is getting `state` and `dispatch` from Context instead! And if we showed the full example we'd note that `TodoApp` doesn't need to be given `state` and `dispatch` anymore because `TodoItem` can access it directly from context!

# Performance Concerns

Remember how I said to not have that inline object inside the `value` prop when we called `<MyContext.Provider value={{state, dispatch}}>`?

The reason for that is that everytime `App` (which is where `MyContext.Provider` is being rendered) is re-rendered, it's going to create a new object on the `value` prop. Which means that any component that is consuming that context will also be re-rendered as well.

We won't be able to rely on only `state` changing to cause consuming components to re-render, we also have to worry about `App` re-rendering causing consuing components to re-render as well.

There's two ways to fix this issue.

One is to use `useMemo` to memoize the value given to the provider:

```js
const contextValue = useMemo(() => {
  return { state, dispatch };
}, [state, dispatch]);
```

The other is to make two separate contexts and have each provide `state` and `dispatch` independently.

```js
const StateContext = React.createContext();
const DispatchContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { todos, isLoggedIn } = state;
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App useContext">
          <TodoPage todos={todos} dispatch={dispatch} isLoggedIn={isLoggedIn} />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

function TodoItem({ title, completed }) {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
}
```

# Why Context Works Great With useReducer

What I find great about using Context with `useReducer` is that it becomes trivial to allow any descendent component to update state in your reducer.

All you need to expose is the `dispatch` function and then any descendent function can `dispatch` anything that it wants. Those state changes are still maintained in the reducer function, keeping that close locality of all state transitions.

Also due to the API of Context you can clearly find which components are consuming the `dispatch` function, allowing you to retain a clear view of how your data is flowing and changing. This is historically one of the strengths of React and it remains true even when you break out of the state to props paradigm.

# Conclusion

Context is not always necessary. However I do think it is important for you to know how to use it, because there are certain occasions where it'll make your life far easier.

If you have some page that has complex state transitions then `useReducer` is a sure-fire answer.

If you have deeply nested components that have to cause those state transitions then get using `useContext`.

All together you can make some incredibly powerful components with these two features. I'm excited to see what you dream up.
