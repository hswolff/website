---
title: GetGlue's Front End Stack
slug: getglues-front-end-stack
date: 2012-11-25T11:53:00.000Z
updated: 2012-11-27T15:42:42.000Z
tags:
- backbone
- code
- coffeescript
- compass
- front-end
- getglue
- jquery
- mustache
- programming
- r.js
- requirejs
- sass
- underscore
---

<p>Earlier this year <a href="http://getglue.com/">GetGlue</a> began work on the new GetGlue website.  It was a chance for a clean engineering slate, allowing us to put all our knowledge together to begin a new project on strong footing.  It was a chance to use all of the most powerful client-side technologies to allow us to work efficiently and quickly.</p>

<p>Our old front-end stack consisted of a PHP backend that rendered XML documents with XSLT.  We used vanilla CSS to style our pages and plain JavaScript to add sugar to the UI.  We relied on jQuery for DOM manipulation and various jQuery plugins to increase the usability of the site.  We optimized our JavaScript files for deployment via our own concatenation and optimization script and served it as one canonical file.</p>

<p>The new GetGlue website is taking advantage of many new powerful front end tools.</p>

<p>The tl;dr list of tools:</p>

<ul>
<li><a href="http://coffeescript.org/">CoffeeScript</a></li>
<li><a href="http://sass-lang.com/">SASS</a></li>
<li><a href="http://compass-style.org/">Compass</a></li>
<li><a href="http://jquery.com/">jQuery</a></li>
<li><a href="http://backbonejs.org/">Backbone.js</a></li>
<li><a href="http://underscorejs.org/">Underscore.js</a></li>
<li><a href="https://github.com/janl/mustache.js">Mustache.js</a></li>
<li><a href="http://requirejs.org/">RequireJS</a></li>
</ul>

<!--more-->

<h1>Preprocessors:  CoffeeScript and SASS</h1>

<p>Before any code was written we made the decision to use preprocessors as part of our tool-chain.  Specifically we decided to use CoffeeScript and SASS to code and style the new GetGlue website.</p>

<p>CoffeeScript has enabled us to develop features at a break-neck pace.  It strips away a great deal of the boilerplate code that exists in JavaScript.  For example when referencing a property on a JavaScript object:</p>

<pre><code>view = response.items[0].title
</code></pre>

<p>There'd be instances when the items array would be empty.  With JavaScript we would have to verify its existence via:</p>

<pre><code>if (response.items &amp;&amp; response.items != null) {
    view = response.items[0].title
}
</code></pre>

<p>The CoffeeScript equivalent to the above code involves just one additional character:</p>

<pre><code>view = response.items?[0].title
</code></pre>

<p>This is one reason we have found CoffeeScript to be incredibly powerful, enabling us to be twice as productive.</p>

<p>SASS has also allowed us to code efficiently and quickly. We are making great use of SASS’a nested selectors as well as mixins. Those two features alone have made coding CSS a joy again and not a pain. Through mixins we can keep our CSS more DRY-compliant, and with variables it is a breeze to update color configurations.</p>

<p>In addition to SASS we are using Compass. We have found Compass to be a great utility belt of common SASS mixins we would have otherwise made ourselves.  Rather than having to manually type every vendor prefix we leverage a Compass mixin to automate the process. For example:</p>

<pre><code>@include border-radius(4px)
</code></pre>

<p>Compiles to</p>

<pre><code>-webkit-border-radius: 4px 
-moz-border-radius: 4px
-o-border-radius: 4px
border-radius: 4px
</code></pre>

<p>We get to save time and sanity. It's a wonderful addition to our toolkit.</p>

<h1>Libraries</h1>

<p>At GetGlue we also take advantage of a number of JavaScript libraries.</p>

<p>It almost goes without saying that we use jQuery for a whole slew of things. DOM selection, manipulation, and everything in between.</p>

<p>More exciting however is our great use of Underscore.js and Backbone.js.  Our entire front-end UI has been built with Backbone Views, Models, Collections, and Routers.</p>

<p>Each page of GetGlue is comprised of one general <code>PageView</code> which in turn contains multiple sub-views (and usually those sub-views have sub-views - turtles all the way down).</p>

<p>All of our data is represented in Backbone Models and Collections with our views bound to change events to re-render themselves.</p>

<p>And naturally we employ underscore.js’ functions to make common tasks more enjoyable to perform. Varying from _.map to _.throttle - it makes our coding lives an absolute joy.</p>

<h1>Mustache</h1>

<p>Currently GetGlue is rendered  entirely client-side and because of that we make extensive use of Mustache templates.</p>

<p>We've found the (mostly) logic-less Mustache templates  easy to work with and they are a cornerstone of our new website. Without any templates we'd have nothing to render and there'd be no website for you to see.</p>

<p>By keeping (most) of the view's logic out of the template we're able to focus on just the structure of the view and not have to worry about anything else.  This allows for fear-less template refactors as nothing else is affected.</p>

<h1>RequireJS</h1>

<p>When developing a large JavaScript application it can become hard to keep track and manage all the moving pieces that are required to make the application run.  To that end we have turned to RequireJS as our module loader and build tool.</p>

<p>Each discrete section of code  lies in its own JavaScript file, attached to its own namespace, and only included by another file when explicitly requested. By adhering to these strict rules we avoid unexpected behavior and can code with confidence.</p>

<p>Having code for one specific functionality in its own JavaScript file makes for great organizational clarity and lends a certain amount of intuition to our code base: by that I mean when file B is a subclass of file A the file structure mimics that behavior.</p>

<p>For example on GetGlue when you open an item from the Guide you open what we internally refer to as a Card. Each of those types of popovers are derivatives of a Card. In our file tree we have the <code>card.coffee</code> base class and in the directory <code>cards/</code> lay all of the card subclasses.</p>

<p>This intuitive structure makes not only for development delight but also allows for easy on boarding of new hires as the system is easy to understand.</p>

<p>We also use RequireJS as our primary build tool for our JavaScript and SASS.</p>

<p>The way you include JavaScript files into other modules is through RequireJS’ require() function. As part of its build process RequireJS traces all require() calls and inlines them into one JavaScript file that we then serve to the browser. (Note: RequireJS allows for other build configurations).</p>

<p>RequireJS will also take all CSS import statements and inline them into a single CSS file.</p>

<p>By the end of the build process we’ve slimmed our JS and CSS files to one a piece making for a quick download by the client and a speedy experience.</p>

<h1>Conclusion</h1>

<p>We’re very proud of what we've accomplished with the new GetGlue website.</p>

<p>By switching to CoffeeScript and SASS we were able to develop quickly and efficiently.  We were able to create features and tweak them without much effort.  It made the entire development experience much more enjoyable.</p>

<p>Giving our site some Backbone.js made UI transition and state management easier than ever before. I will never again dip my hand into the DOM to find state. Thar be dragons.</p>

<p>RequireJS is a beautiful tool that I wish I had known about years ago.  Its module management is intuitive and its build tool is very powerful.</p>

<p>We've had a great time building the new GetGlue website. We hope you enjoy it as much as we do.</p>

