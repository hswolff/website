---
title: Make Your Code Pretty
slug: make-your-code-pretty
date: 2013-08-30T09:32:24.000Z
updated: 2013-12-30T21:03:51.390Z
tags:
- code
- editor
- packages
- pretty
- standards
- sublime text
---

<p>All too often I'll see code that'll make me gag.</p>

<p>There's inconsistent indentation, no linting, and trailing white space run amok.  It won't effect how your code is executed but it makes for an unwholesome experience for whoever reads your code.</p>

<p>I won't place the blame for these types of code 'errors' on the programmer.  If you don't have the proper software installed they are extremely hard to track.  I don't expect anyone to be hand-combing through their code, looking for any extraneous white-space or instances where they forgot to remove a trailing function argument that is no longer used.</p>

<p>What I expect is for programmers to install the proper tools into their code/text editors to do it for them.</p>

<p>In the instance of Sublime Text there is a holy marriage of two packages that will ensure that every piece of code you write is beautiful.
<!--more--></p>

<h2><a href="https://github.com/SublimeText/TrailingSpaces">TrailingSpaces</a></h2>

<p><img src="/images/posts/2013/08/trailing-spaces-300x75.png" alt="trailing-spaces" width="300" height="75" class="alignleft size-medium wp-image-2697" />
Just like shining a black light into dusty corners, Trailing Spaces will highlight every instance of extraneous whitespace.  In glorious neon pink, you'll see all your old code come alive in ways you never thought possible.</p>

<p>After you install this package you'll understand why I get so upset when I see trailing white spaces left in code.  Whereas they are invisible without this package, they are a hideous eye sore with it.  Lighting ablaze every offender in its neon pink glare.</p>

<h2><a href="https://github.com/SublimeLinter/SublimeLinter">SublimeLinter</a></h2>

<p><img src="/images/posts/2013/08/linting-300x129.png" alt="linting" width="300" height="129" class="alignleft size-medium wp-image-2699" />
Instantaneous linting is a friend you wish you had years ago.  Keeping you honest with each line of code you write, SublimeLinter will continuously check your code to see if it is staying inline with best coding practices.  For Python that's PEP8, for JavaScript that's JSHint.  Along with best practices it'll also point out when you're doing something wrong.</p>

<p>It's a loving whisper that alerts you that you left a trailing argument in a function you wrote.  You needed that argument parameter before, but after a quick refactor it became unused.  SublimeLinter is there to kindly point these things out.</p>

<h2>Conclusion</h2>

<p>A machine doesn't care if your code is ugly.  It doesn't care if there's a bunch of extra whitespace littered throughout the code (unless it's a code sensitive language ;)).  It'll read it and execute it the same way.</p>

<p>The person who cares is the one reading your code.  They are the one who must hold your code up against an engineer's standard.  If that person has their code editor wired up so that every trailing white space comes ablaze in neon pink they're gonna have a bad time.</p>

<p>Keeping code pretty reflects directly on the programmer.  It shows if they care about what they write.  You're in this gig because you want to be and you care about what you do.  So you should do the same for every piece of code that you write.</p>

