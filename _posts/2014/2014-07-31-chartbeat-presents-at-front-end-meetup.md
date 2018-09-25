---
title: Chartbeat Presents at Front-end Meetup
slug: chartbeat-presents-at-front-end-meetup
date: 2014-07-31T17:26:28.763Z
updated: 2014-07-31T17:26:28.758Z
tags:
- angularjs
- chartbeat
- front-end
- video
- youtube
- presentation
---

Last Thursday Chartbeat hosted the [Frontend Innovators Meetup group](http://www.meetup.com/frontend/events/148291772/) at our office. The focus was [Angular.js](https://angularjs.org/), and my co-workers and I had the good fortune of being presenters. Our goal was to share some of the experiences and insights we’ve gained over the past year working with Angular.js.

# From Closure To Angular

<iframe src="//www.youtube.com/embed/IVVzM6upJN4" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

[Slides are available online.](http://chart.bt/1rwuol9)

I presented first, focusing on how and why Chartbeat began using Angular.js for all of our front-end applications in the first place. I discuss our decision to migrate from [Google Closure Library](https://developers.google.com/closure/library/) to Angular.js after weighing all the options we had available. I then shared how we actually develop with Angular.js, focusing on how we layout our directories, files, and applications, and discussing our multiple applications at Chartbeat and our need for a system that allows for growth, flexibility, and sharing between all applications.

# Reusable Components

<iframe src="//www.youtube.com/embed/o_ehzZE4iFk" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

[Slides are available online.](http://chart.bt/1pMW7JL)

[Danny](https://twitter.com/dbow1234) presented next, discussing the merits and pitfalls of developing reusable components. He first discussed the advantages of working with components, which give us the ability to quickly throw together entire new applications by using existing components, allowing us to rapidly develop new applications by leveraging existing components. Danny then dove into the trade-offs that accompany the creation and maintenance of components: if it is more “expensive” to create a component than it is to simply duplicate code then perhaps it isn’t worth the time and effort to create it as a component. It was a nuanced talk with some great points. Worth watching in full, I think.

# Graphing Chartbeat with Angular + SVG + D3

<iframe src="//www.youtube.com/embed/vmJ0501WzU0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

[Slides are available online.](http://chart.bt/1mxcE1m)

[Nick](https://twitter.com/heavi5ide) then presented about [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics), [D3](http://d3js.org/), and Chartbeat’s use of D3 within Angular. He began by giving a solid background on SVG and the pitfalls you can encounter when trying to use Angular’s templating functionality with SVG elements (spoiler alert: there are a few!). Nick then discussed our internal library called C3 that he developed. He showed the design decisions that shaped C3 and the places where he’s found some shortcomings that he hopes to fix in the future.

# Frontend Testing and Build Process

<iframe src="//www.youtube.com/embed/C5tei0brXRI" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

[Slides are available online.](http://chart.bt/1sGmm9I)

[Jem](https://twitter.com/JemYoung) rounded out the night with a thorough talk on Chartbeat’s test practices and build process. He talked about our testing stack, consisting of [Jasmine](http://jasmine.github.io/2.0/introduction.html), [Karma](http://karma-runner.github.io/), [Protractor](https://github.com/angular/protractor), [Jenkins](http://jenkins-ci.org/), and [Selenium](http://www.seleniumhq.org/), and the best ways to put  these systems to work. Jem also shared some good practices to keep in mind when using these tools. He then turned his focus to how we compile our applications for a production environment, discussing our move from [Grunt](http://gruntjs.com/) to [Gulp](http://gulpjs.com/) and why we're finding it a better fit -- it's cleaner and clearer to work with, as it’s mostly vanilla JavaScript, which makes reasoning with it easier.

* * *

We had a great time presenting and hope everyone learned something from our talks.

Angular.js is still pretty new and we're all still learning the best way to do things. Over the past year we’ve learned a lot about the right way to do things and the wrong way to do things. If you have too, please chime in. Sharing what we've learned is the best way for our whole front-end community to continue building better and better things.
