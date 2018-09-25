---
title: My Experience with Ruby On Rails as a PHP Developer
slug: my-experience-with-ruby-on-rails-as-a-php-developer
date: 2012-05-06T20:43:26.000Z
updated: 2012-05-06T20:48:13.000Z
tags:
- favorite
- php
- programming
- ruby
- ruby on rails
- web
---

<p><em>Note:  This post is an extension of my previous post <a href="http://blog.harrywolff.com/my-experience-with-php-frameworks-yii-codeignitor-and-symfony/" title="My Experience with PHP Frameworks – Yii, CodeIgnitor, and Symfony">about developing with PHP frameworks.</a></em></p>

<p>Recently I created a new web app using Ruby on Rails. By trade I'm a PHP and JavaScript developer so this foray into RoR broke new ground for me.</p>

<p>I went with Rails over a PHP framework mostly because I wanted to try something new. I wanted to try something different and with its popularity Rails was a great pick.</p>

<p>In brief I found my experience developing with Ruby on Rails to be both frustrating and effortless.</p>

<p><strong>Frustrating</strong>:  because I was new to RoR I didn't know all of its tricks and how to do things the Rails Way. As a result I felt like I was coding at a slower pace than I usually do.  Really that's the performance hit anyone experiences when trying something new.</p>

<p><strong>Effortless</strong>:  once I learned some Railisms and began to get the swing of how Rails works coding went smoothly. Using Rails’ ActiveRecord was magic once I understood how and why I should use it. Also Rails’ form helpers made form handling a joy to work with. Again: this was after I picked up some understanding of how these things worked. Before understanding I was close to pulling out my hair.</p>

<p>So what follows is a run through of my thoughts and experiences while I used Ruby on Rails to create <a href="http://datesandpairs.com/">Dates &amp; Pairs</a>.</p>

<p><em>Disclaimer:  I am in no way a Rails or Ruby expert so if something written is incorrect please let me know and I will update the post to reflect the correct information.</em>
<!--more--></p>

<h2>Ruby is [more] Complicated (than PHP)</h2>

<p>With a PHP application all you need is an Apache server.</p>

<p>With a Ruby on Rails application you need <a href="https://rvm.io/">RVM</a> (optional), <a href="http://rubygems.org/">gems</a>, Rails, and patience.</p>

<p>It isn't possible to open your favorite Code Editor and start writing. You have to create a Rails application and play within its confines.  (To be fair those confines are larger than most PHP applications.)</p>

<p>Ruby is a full fledged object oriented language whereas PHP is a scripting language.  There's no equivalent to an index.php file with <code>&lt;?php echo 'Hello'; ?&gt;</code> in it in the Ruby world.  The closest you'll get is a <a href="http://www.sinatrarb.com/">Sinatra</a> app, yet even then you're making use of the Sinatra gem.</p>

<p>That was one of the biggest differences I faced while developing in Ruby on Rails.  I didn't know where the entry point for my program was and that led to a great deal of frustration.  In a PHP application I almost always know where things start.  In my RoR app I had to do a good deal of sleuthing to figure that out.  Although it wasn't really important to my coding it mattered to me on an intellectual level, something that I couldn't let sit unanswered.</p>

<h2>Ruby the Language</h2>

<p>Just as there's a PHP way of doing things there's a Ruby way of doing things.  This goes from syntax to how Ruby functions are named.</p>

<p>As a PHP developer I have grown used to checking if a variable is set by using PHP's <code>isset()</code> function.  In fact most PHP functions, whether it be for array or object manipulation, the variable is passed into the function to perform the desired computation.  In Ruby all function calls are made on the object.  This makes for beautiful code but also requires a shift in one's cognitive approach.</p>

<p>In PHP you'd type <code>isset($_GET['name'])</code> to check if the query param <code>name</code> was set.</p>

<p>In Ruby you'd type <code>params[:name].blank?</code>.</p>

<p>In PHP if you wanted to change 'Hello World' to 'Hello Bob' you would type <code>str_replace('World', 'Bob', 'Hello World')</code>.</p>

<p>In Ruby you would type <code>'Hello World'.gsub('World', 'Bob')</code>.</p>

<p>As you can see the Ruby syntax allows you to make function calls directly on the subject, whereas PHP requires you to pass in the subject to the function.</p>

<p>The reason for this is that Ruby is an object-oriented language.  Everything in Ruby is an object, allowing you to make function calls on anything.</p>

<p>Besides the power you can get from object-oriented programming, this allows you to write code that is very easy to read and follow.</p>

<p>The main problem with moving to Ruby is that you have to learn what all those function calls are.  Also you have to start developing a sense of what function calls would be named.  Like above, I would not have guessed that <code>gsub</code> would be the function name to replace part of a string.</p>

<p>That's why <a href="http://www.ruby-doc.org/">Ruby-Doc.org</a> became my best friend while learning Ruby.</p>

<h2>MVC or Bust</h2>

<p>Ruby on Rails is an MVC architecture that makes it very difficult for you to cheat.  This is a good thing as the more you adhere to a MVC design the easier it will be for you to maintain your application.</p>

<p>As a result you should take advantage of Ruby's object-oriented powers.  Create additional methods on your Rails models.  This will allow for later development joy, keeping your code dry and easy to read and maintain.</p>

<h2>Deployment</h2>

<p>Without a doubt the hardest part to developing my app in Ruby on Rails was deploying the final code to production.  I damn near quit at this point as the curve to get my site live was very steep.</p>

<p>I used Rails' relatively new <a href="http://guides.rubyonrails.org/asset_pipeline.html">asset pipeline</a> which in retrospect was probably above my skill level.  The documentation for deploying with Rails' asset pipeline isn't very rich and as such I had to hunt and peck around the web to find the answers I needed.</p>

<p>I am hosting my program on <a href="http://www.webfaction.com?affiliate=hswolff">Webfaction</a> which is a pseudo-VPS service.  You get shell access and the ability to host a plethora of applications, Rails being one of them.</p>

<p>I also used <a href="https://github.com/capistrano/capistrano">Capistrano</a> to deploy my application.  Without this software I would dread deploying any updates.  With this software it's a breeze.  All I do is <code>cap deploy</code> and I start the automated process to updating my production code.</p>

<h2>Conclusion</h2>

<p>All in all I had a fun time learning how to create a Ruby on Rails application.  Half of it was spent learning Ruby, half was spent learning Rails, and half was spent learning how to learn Ruby and Rails.</p>

<p>I thought RoR would speed up my development time and it did.  However my inexperience with Ruby and Rails slowed me down, being the primary source of productivity speed bumps.</p>

<p>I was a little upset at how complicated it was to use Rails` asset pipeline.  The biggest reason was definitely its lack of quality documentation.  However the features it brings you are quite lovely (CSS and JS concatenation and minification).</p>

<p>Would I use RoR for my next project?  Yes.  But I won't.  I have my eyes set on using <a href="http://nodejs.org/">Node.js</a> for my next project.  My JavaScript skills have immensely improved and the prospect of coding in JavaScript on both the front-end and back-end brings a smile to my face.  Stay tuned for when that happens.</p>

<p>Ruby is a hell of a language and one I look forward to playing with more.  It brought an element of joy to my coding that I had never before experienced with PHP.</p>

<p>Sure there were times I wanted to run back to the warm and familiar embrace of PHP's dollar signs but the fluidity of Ruby kept me close.</p>

<p>Of course at the end of the day it doesn't matter what language you use.  Just start coding and don't give up.  Everything else is just fluff.</p>

