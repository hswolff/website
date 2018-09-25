---
title: An easy introduction to AngularJS
slug: what-is-angularjs-and-why-is-it-awesome
date: 2013-11-25T12:00:39.000Z
updated: 2014-02-24T15:39:31.053Z
tags:
- angularjs
- code
- introduction
- programming
---

<p>AngularJS doesn't do much.  When you take it out of the box (i.e. load it on a webpage) you're only given five things to play with: modules, services, controllers, directives, and filters.</p>

<p>Each of these things complements the other.  There are very slim overlaps in functionality between all the moving pieces of AngularJS.  That fills my heart with joy because I only have to learn how to do something one way, with one slice of the AngularJS pie.</p>

<p>The funny thing about AngularJS is when you use every <em>thing</em> it provides, you get something far greater than its sum.   In that way AngularJS truly does allow you to create web-apps of 'superheroic' proportions.  Their words, not mine (although I do agree).</p>

<p><strong>Ready to dive a whee bit deeper?</strong></p>

<!--more-->

<h2>Modules</h2>

<p>A module in AngularJS is about what you'd expect.</p>

<p>It lets you package your code into small chunks, useful for breaking a large application into smaller pieces and for distributing code.</p>

<p>You define a module name upon instantiation, neatly namespacing all the relevant code within.  This helps you stay clear of polluting the global window object and not worry about clobbering other variables.</p>

<p>One of the most lovely features of modules in AngularJS is that you can load parts of a module in any order.</p>

<p>For example on a html page that is loading your application you can load the script tags in any order, and it won't affect how the application is put together.</p>

<h2>Services</h2>

<p>In their simplest form, a service provides singleton objects to your application.  That's really about all they do.</p>

<p>Sure there are some nuances to services.  There's different variants: factories, providers, constants, and values.  Most of them are quite aptly named.</p>

<p>Constants and values do about what you'd expect.  They are easy to use key-value stores that can't be modified after app start-up.  Hence the 'constant' name.</p>

<p>Factories are services designed to allow you to create new instances of an object.  The factories themselves are singletons, but they're designed to allow you to create as many instances of an object as you desire.</p>

<p>Providers are services that allow an amount of configuration before application initialization.  For example if you have an API service, you can change whether it points to the dev or production server by using the provider pattern (as opposed to having that if statement within the service.  Always better to be explicit.).</p>

<p>That's about the skinny of what services are in AngularJS.  These things should (almost) never touch the DOM.  They're just vanilla JavaScript objects, with sugar around them to work neatly amidst the AngularJS framework.</p>

<h2>Controllers</h2>

<p>Traditionally, controllers are used as the glue between models and views.  Here again AngularJS doesn't stray far from tradition.  In an AngularJS controller you can define what data and behavior is exposed to the view.  How this is done is semi-magical.</p>

<p>There's a service that AngularJS provides called '$scope'.  $scope is used like a regular JavaScript object.  You can assign strings (<code>$scope.hello = 'world';</code>), other objects (<code>$scope.person = {name: 'bob'};</code>), and functions (<code>$scope.foo = function() { return 'bar'; }</code>).  You know...whatever you want.</p>

<p>Where things get a little opaque is how that gets exposed to the view.  If you're really curious you're free to dive into AngularJS internals.  However it is safe to assume that anything assigned to <code>$scope</code> is available for access in the view.</p>

<p>Aside from the magic of <code>$scope</code> everything else about a controller is mundane.  Thank goodness.</p>

<h2>Directives</h2>

<p>Basically directives are components.  That's the simplest way to understand it.</p>

<p>Past that things can get awfully confusing awfully quickly.</p>

<p>Directives allow you to extend the language of the DOM, doing things that jQuery is commonly used for.  For example AngularJS defines the <code>ngClick</code> directive, which allows you to attach behavior when a click event is observed.  When AngularJS compiles your views (which are basically HTML) it has knowledge of the <code>ngClick</code> attribute, and its behavior.</p>

<p>So when the AngularJS compiler sees <code>&lt;div ng-click="popup()"&gt;&lt;/div&gt;</code> it attaches a click event listener on that div element (as defined in the ngClick directive).</p>

<p>AngularJS ships with many great default directives.  It's encouraged to re-use directives within directives.</p>

<p>Just remember that directives are similar to components: they allow you to create a new unit with specific functionality.</p>

<h2>Filters</h2>

<p>Filters are used by templates to modify the output of data.</p>

<p>For example AngularJS ships with the <code>number</code> filter which can take an integer input such as <code>12345</code> and output it with commas as <code>12,345</code>.</p>

<p>Or you can have an array of strings and only want to show the ones that start with a 'he'.  You'd use the <code>filter</code> filter (unfortunate name redundancy).</p>

<h2>Wrap-up</h2>

<p>The dirty secret of AngularJS is that it's basically a simple set of tools that allow you to do advanced things really easily.</p>

<p>AngularJS only gets really complicated when you start diving into its source code.  But let's stay away from that elephant in the corner.</p>

<p>There's an interesting learning curve when you get up to speed with AngularJS.  The first week you'll have a grand old time.  The second week you'll encounter some weirdness which will throw you back a bit.  By the third week you'll have to do a little more conceptual diving into AngularJS to understand why things are behaving the way they are.</p>

<p>By the fourth week you'll be able to write a blog post just like this.</p>

<p>Get out there super-heroes.  Start writing some super-heroic JavaScript.</p>

