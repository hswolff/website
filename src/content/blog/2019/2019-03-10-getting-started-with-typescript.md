---
title: Setting Up TypeScript
postSlug: setting-up-typescript
date: 2019-03-10
category: code
tags:
  - typescript
---

Now that we've gotten [a nice and easy introduction to _what_ TypeScript is](/blog/what-is-typescript/) we can start talking about how to code with TypeScript. Specifically how to get our local dev environment set up so that we can actually write TypeScript code. That means getting TypeScript to compile and type check on our local machine.

I'm not going to go into how TypeScript works yet - that'll be covered in a future blog post. This is in many ways the pre-requisite to that eventual guide on how to write TypeScript code. I feel it's important that we have our dev environment set up correctly so we can validate that we're writing correct TypeScript code.

You can consume this content in two glorious ways. In video form, which I must admit will be rife with great humor and dazzling visuals, or you can consume it the way of cave men: with scratches on a wall. To which I mean in written form.

There's two parts to this blog post because there's two ways you can compile TypeScript code.

The first is with the official [TypeScript CLI `tsc`](https://www.npmjs.com/package/typescript). That's the path most new TypeScript projects follow. It provides transpiling and type checking, making it an all in one solution that is easy to get up and going with.

The other is with [Babel](https://babeljs.io/). Starting with version 7 of Babel there is now a plugin that adds support for [transpiling TypeScript code with Babel](https://babeljs.io/docs/en/babel-preset-typescript). The one caveat is that Babel only does the transpiling, it doesn't check types at all. To still get the full TypeScript experience you'll still need the official TypeScript CLI and use it for type checking your code.

# With TypeScript's CLI

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/sVYlv78IY8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

First thing we need to do is get ourselves the `tsc` program installed. Let's let our favorite package manager handle that for us:

```
npm install -g typescript
```

This will install `cli` globally making it available to compile TypeScript anywhere on our system.

Let's write our first (basic) TypeScript file so we can start playing around with `tsc`. Let's name this file `greeter.ts`.

```typescript
// greeter.ts

function greeting(name: string) {
  console.log(`Hello ${name}`);
}

greeting('YouTube!');

greeting('1');
```

From here we can quickly transpile that code via:

```
tsc greeter.ts
```

You should see a new file added in your directory called `greeter.js`. If you peek inside it you'll see that TypeScript transpiled your code! Great success transpiling your first TypeScript file!

If you want you can take this a little further and make a TypeScript project. You can create a `tsconfig.json` file which controls the behavior of TypeScript, allowing you to customize its behavior for your projects needs.

The best way to create that file is via

```
tsc --init
```

This creates a great starting `tsconfig.json` file with sensible defaults and inline comments for every configuration. One that I enjoy changing is the `target` setting.

Try changing `target` to `es2015` and then re-run `tsc`. If you want to use your `tsconfig.json` file then you can just run `tsc` by itself and it'll auto find the configuration file.

Did you notice the compiled output changed? It kept the template string this time! That's because we're now targeting an environment of `es2015` which has support for template strings, so TypeScript doesn't transiple it away!

# With Babel

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/WRfhMI1gskk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Getting started with Babel requires a little more work than just using TypeScript. For starters we need more than one npm package. So let's initialize an npm project:

```
npm init -y
```

This creates a `package.json` file and skips all prompts so we can just get on our merry way of installing even _more_ packages!

Then we need to install the [Babel CLI](https://babeljs.io/setup#installation) and associated [Babel TypeScript plugin](https://babeljs.io/docs/en/babel-preset-typescript)

```
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-typescript
```

We need to tell Babel to use our plugin. The best approach for that is with a `.babelrc` file. Create a `.babelrc` file and put the following inside:

```json
{
  "presets": ["@babel/preset-typescript"]
}
```

And now we can finally compile our TypeScript file!

```
npx babel --extensions ".ts" greeter.ts -d dist
```

This uses npm's [npx feature](https://www.npmjs.com/package/npx) which lets us easily call into CLI programs installed within `node_modules`. We need to tell Babel that we want it to also check `.ts` extensions which is where we wrote our TypeScript file.

With that you should see your transpiled `greeter.js` file made with some pretty JavaScript inside! Yay!

Note that Babel does not do any type checking. It just transpiles. To do type checking you'll need the `tsc` CLI as described above.

In this situation, when used with Babel you may want to turn on the `noEmit` configuration for TypeScript. This tells TypeScript to not output any files, and just let it focus on doing type checking.
