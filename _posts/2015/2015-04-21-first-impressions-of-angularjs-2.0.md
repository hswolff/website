---
title: First Impressions of AngularJS 2.0
slug: first-impressions-of-angularjs-2-0
date: 2015-04-21T13:28:54.142Z
updated: 2015-04-21T13:28:54.142Z
tags:
- angularjs
- angularjs2
---

Over the weekend I created a [clone of Hacker News with Angular2](http://hswolff.github.io/hn-ng2/). I've read a lot about the changes Angular 2 will have and I wanted to see for myself what it would be like to create an app. What would it be like? How will it be better than Angular 1? Will I enjoy writing an Angular 2 app?

Before I delve into my impressions let me preface everything that follows with the obvious: Angular 2.0 is not done. At the time of this writing it's marked as an alpha release, so please keep that in mind when reading. Things are going to change and improve, but I just wanted to share with you my initial impressions on what it's like to create an app with Angular 2.

# No Documentation, but Excellent Comments
I say there's no documentation mostly as a joke because, as I've said before, Angular 2 is not done. However what I'm always impressed by is the level and quality of comments by the Angular team in the source code. This is a great tradition that the Angular team is carrying over from Angular 1, and I would not have been able to create my app if it hadn't been for the source code comments. It's not surprising the Angular team takes such time and care to make sure their code is exhaustively commented. They actually run the source code through the [dgeni documentation generator](https://github.com/angular/dgeni) to produce their API docs. So while it was less pretty than browsing a webpage, all the documentation that will exist there is already accessible.

When I wanted to understand the additional properties that could be set with the `@Component` decorator, I was able to easily [delve into the source code and read the comments](https://github.com/angular/angular/blob/master/modules/angular2/src/core/annotations/annotations.js#L488-523) that contained all the documentation that I could ever need for that particular decorator. This was great when I was curious about the API for a specific object. However the type of documentation that is still very much a work in progress is 'integration' or guide documentation. This is documentation that takes a high level look at how multiple objects work together to create an application, showing you how the `@Component` directive makes use of the `DI` module when you instantiate a class. [There is already a good amount of progress on this type of documentation](https://github.com/angular/angular/tree/master/modules/angular2/docs/core) but there is still a lot left to do.

# Explicit

Angular 2 is an incredibly explicit framework. This is even starker when compared against Angular 1.

In Angular 1 you're able to willy nilly use any directive that you want in any template. If you want to add a `ng-repeat` go right ahead, Angular will happily compile that template.

With Angular 2 you must declare what directives are used in your component. I spent a good ten minutes when making my HN app trying to figure out why my list of HN items were not being expanded by the for loop I had created (`<div *for=""/>` is the new `<div ng-repeat=""/>`). It was only after scratching my head and wondering if I had broken Angular that I realized I [hadn't declared that the `For` directive was being used in my template.](https://github.com/hswolff/hn-ng2/blob/f77f24e3d56637445fce75c115136853a709f2d8/src/pages/item/index.js#L14)

While being explicit is great I found the boiler-plating of having to declare `For, If, Switch, SwitchWhen, SwitchDefault` for every component to be quite monotonous. I'm not used to having to declare what my component is using and I found that change to be a little tricky to get used to. This is definitely due to the mental switch from Angular 1 where every directive is always available, so it's just going to be something that takes some time for adjustment.

# Tools

Angular 2 already seems to be shaping up to be a very tooling friendly - and heavy - framework.

It was recently announced that Angular 2 is written with [TypeScript](http://www.typescriptlang.org/) which is great as it allows you to take advantage of all of TypeScript's features, most importantly types. However I was little let down to see that internally Angular 2 is still being compiled with Traceur. I can only imagine this is a work in progress but I was sad I couldn't start using TypeScript with Angular today.

Along with TypeScript Angular includes a [run-time type assertion library](https://github.com/angular/angular/tree/master/modules/rtts_assert) so that you can continue to take advantage of your type definitions when your app is running in the browser.

On top of types Angular [also includes](https://github.com/angular/angular/blob/master/modules/angular2/package.json#L12) the entire [Rx library](https://github.com/Reactive-Extensions/RxJS) so you can work with the reactive programming paradigm.

All of these are great to have included however they do come with a cost.

In my Angular 1 Hacker News app the JavaScript file size of the final application code is 194.9kb. This includes a number of external libraries: angular-animate, ui-router, lodash, firebase, and momentjs.

In my Angular 2 Hacker News app the JavaScript file size of the final application is 250kb. That only includes the firebase library as a dependency.

Due to Angular 2 being so large it takes a while to parse all the contained JavaScript code. When I created a simple 'Hello World' app before creating the HN app it seemed to take between 2-3 seconds before any content was rendered on the page.   There were some moans on [the Hacker News thread](https://news.ycombinator.com/item?id=9405142) that the application was slow. As far as I can tell, this is why.

I'd be happy to hear from the Angular team about this. I know a lot of work has been done to make sure Angular is performant once its on the page - an entire [benchmarks](https://github.com/angular/angular/tree/master/modules/benchmarks) module has been created for this explicit purpose - but I haven't seen any mention of start-up time.

# Closing Thoughts

Overall I'm extremely impressed with the progress of Angular 2. Despite being an alpha it seems to be rapidly racing towards beta status. Many of its primitive objects are already in place which is exciting. With primitives in hand it'll allow for the creation of higher-level components which I imagine is what Angular 2 developers will spend most of their time interfacing with.

As I've shown it's already possible to create a fully featured application with Angular 2. There were some instances where I found Angular 2 was not quite ready and I enumerated all of these [gaps in my Todo list](https://github.com/hswolff/hn-ng2#todo). The two things I'm most looking forward to is being able to use TypeScript directly with Angular and also playing around with reactive coding through the Rx library.

I'm not exactly sure when the Angular team hopes to release Angular 2 but I wouldn't be surprised if it was later this year - sometime in the fall. It's already way further along than I expected. If this is the alpha, I can't wait to see the first stable release.

*Thanks to Justin Poliey ([@justinpoliey](https://twitter.com/justinpoliey)) and Xavier López ([@xavierelopez](https://twitter.com/xavierelopez)) for reading drafts of this post.*