---
title: "Weekend Project: Bring The Salsa"
slug: weekend-project-bring-the-salsa
date: 2013-07-08T21:48:26.000Z
updated: 2013-07-08T22:08:31.000Z
tags:
- angularjs
- firebase
- hack
- javascript
- party
- programming
- weekend hack
---

<p>There's been many times I've read of someone hacking together a project over a weekend.  Appropriately titled a 'weekend hack' these projects have a finite beginning and end. And they've always seemed out of reach for me to accomplish.</p>

<p>However! thanks to this long weekend I was able to complete my own weekend hack! Granted this was a long weekend so I may have cheated a little bit, but nonetheless!  I was able to start and finish a project within the span of a weekend.</p>

<p>So what did I make?  A web app I've named <a href="http://bringthesalsa.hswolff.com">Bring The Salsa</a>!</p>

<p>(Here's the part of the post where I wait for the applause to die down before I can continue typing again.  You are thunderously applauding my accomplishment, aren't you!? ;))
<!--more--></p>

<p>Bring The Salsa is a web app that was built to solve a pain point I've often encountered when hosting a party at my apartment:  I want friends to bring things, however managing who is bringing what is always a manual bloated ordeal.</p>

<p>So Bring The Salsa aims to fix that. You can create your own list with a unique URL to share with friends, and freely edit what you need to bring, how many needs to be brought, and who is bringing what.</p>

<p>Enough with what it does, hopefully I made the app intuitive enough that you can figure it out yourself.</p>

<h2>Technology Used</h2>

<p>Now for the tech details, you know, the stuff that truly matters ;).</p>

<p>The backend is graciously provided by <a href="https://www.firebase.com/">Firebase</a> (graciously and freely - cuz it's in beta).  This cut my development time in half, allowing me to focus on the front end of the application and not worry about creating a node.js server with a database and an API and yadda yadda yadda.</p>

<p>This was my first time using a backend provided by a 3rd-party.  After I wrapped my head around the way data is stored in the DB I found using Firebase to be an absolute joy.  Out of the box it has 1st-class support for real-time updates, a wonderful side-effect that I was able to directly take advantage of in my app.</p>

<p>As for the true star of this app, that is undoubtedly <a href="http://angularjs.org/">AngularJS</a>.</p>

<p>Bring The Salsa is an AngularJS application from top to bottom.  This was my first time creating an application in AngularJS and I must admit: it was lovely.  My current client side MVC background is Backbone.js so I began using Angular.js with a couple of prejudices, however they were all washed away over the course of the weekend.</p>

<p>In case you want to see what an Angular.JS application looks like, and in particular this application, I've open-sourced the code on GitHub and plan to continue development openly.</p>

<p><a href="https://github.com/hswolff/bringthesalsa">Click here to see the open-source repository of Bring The Salsa</a>.</p>

<p>I have a lot more to say about AngularJS.  So much more that I will be dedicating an entire post to talk about what I've discovered about AngularJS over this long and lovely weekend.</p>

<h2>Regret</h2>

<p>The only thing I regret about creating Bring The Salsa is that it would have been perfect had it existed before this weekend began.  Because truly, that is when it will come in handy the most: for weekends that you're hosting a party and need some organization.</p>

<p>And above all else, when you do use this app, for heaven's sake, don't forget to bring the salsa.</p>

