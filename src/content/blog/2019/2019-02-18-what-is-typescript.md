---
title: What is TypeScript?
postSlug: what-is-typescript
date: 2019-02-18
category: code
tags:
  - typescript
---

TypeScript is probably the best way to add static typing to JavaScript. That's probably all that people really know about TypeScript though - that it adds static types. I like to delve a little deeper into a topic before I start to learn it, so I figured I'd take you along for the ride.

Check out the video for all the details, or read about the highlights from the video below.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/Ap_LrI8Wibo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

It's a strict syntactical superset of JavaScript.

Why does this matter? Because any JavaScript application automatically becomes a TypeScript application.

Anders Hejlsberg is the lead developer of TypeScript. This matters because he knows a thing or two about writing a programming language, having created C#, Delphi, and Turbo Pascal. So, he knows a thing or two about how to make a programming language.

TypeScript was first made public in October 2012, which was far earlier than I had ever imagined.

TypeScript is by no means the first static type checker for JavaScript.

[Google Closure Compiler](https://developers.google.com/closure/compiler/) was probably one of the first ones. It was released all the way back in 2009. It's method of adding static types was via JSDoc comments. As you annotated code with JSDoc comment blocks the Closure Compiler parsed it and imbued your code with static types. Closure Compiler is still developed and used, however mostly internally to Google.

[Flowtype](https://flow.org/) is another popular static type checker. Created by Facebook, it adds static type information via inline annotations (similar to TypeScript). It's not as popular or widely used in the open source community as TypeScript.

# Why TypeScript?

So we talked about what is TypeScript, but now let's talk about why you should consider using TypeScript.

I delve into more detail in the video but here are the bullet point reasons:

- Due to types being checked at compile time, and due to the fact that type information is in many ways documentation, TypeScript effectively provides code enforced documentation. For that reason alone you should try out TypeScript.
- Great developer experience via great IDE support. In particular the experience of writing a TypeScript application with VSCode is almost as good as a Java IDE.
- Helps maintain a large application across a large team.
- It's definitely the market leader right now in terms of static type checkers. This should provide a sense of calm that your investment in learning won't be wasted.
- They’re very good with community feedback.
- They publicize and follow a [Public Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap) so you know what they're going to work on next, and when you should expect it.
- Monthly release cadence.
- Framework support: Angular, React (with JSX), Vue.js, and all others.
- It fully supports the ability to incrementally migrate a JavaScript application to a TypeScript application.
