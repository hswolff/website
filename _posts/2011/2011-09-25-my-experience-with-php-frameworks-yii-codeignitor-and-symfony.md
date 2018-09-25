---
title: My Experience with PHP Frameworks - Yii, CodeIgniter, and Symfony
slug: my-experience-with-php-frameworks-yii-codeignitor-and-symfony
date: 2011-09-26T00:12:45.000Z
updated: 2012-06-13T11:15:35.000Z
tags:
- code
- codeignitor
- favorite
- frameworks
- php
- programming
- reviews
- ruby on rails
- symfony
- yii
---

<h2>Overview</h2>

A week ago I started work on a personal web project using PHP as my programming language of choice.  This wasn’t a hard decision as I use PHP daily for work and have a great deal of strength in the language.

As I set forward to create my web app I knew I wanted to use a prebuilt PHP web framework.  My reasons included not wanting to reinvent the wheel and the belief that the benefit of open source software is its great community of support.

Another reason I wanted to use an open source PHP framework was that it provides a tried and true framework complete with features that I otherwise would not have time to code myself.  Although this project is being done during my free time I don’t want its quality to suffer.  So by using a framework that already provides proper request/response, and routing support it would allow me to focus on designing and developing the app and not worry about the architecture that it would be built on.

From my research (lots of Google searches and crawling through and around websites) I found the current top PHP frameworks are:

1.  Yii
2.  CodeIgniter
3.  Symfony

Here’s my interactions with them.

<!--more-->

<h2>Symfony</h2>

I first chose Symfony as the framework to use for my web project.  I tried its <a href="http://symfony.com/get_started">Quick Tour</a> and found myself agreeing with the design decisions of the software.  It made sense to me how things were built and how they were used.

In addition to the content of the Quick Tour I also found the design of Symfony’s website to be quite appealing.  Although it is said to not judge a book by its cover we humans tend to notice things that are pretty.  The same is true of Symfony’s website.  Its pleasing to look at, pleasing to use, and I felt a sense of professionalism and polish that made me feel safe to learn more about the code.

I spent a few nights reading in bed on my iPad the rest of Symfony’s tutorials and docs and finally felt confident enough to begin coding.  I did begin doing some coding in Symfony and aside from the difficulty of learning a new project’s jargon I was actually having an enjoyable time using Symfony.  That is until I ran into Symfony’s Bundle system.

<a href="http://symfony.com/doc/current/book/page_creation.html#page-creation-bundles">Symfony’s bundle system</a> is unique.  I honestly don’t fully understand it but I was not enjoying learning what I was reading.  From what I read it sounds like a very strong design approach to maintainable and self-contained code however it is not a convention I’m used to, nor one that I found myself wanting to learn.

Even more than not understanding fundamentally what a bundle is and what it is used for, from what I understood I felt as if it was overkill for my purposes and would end up slowing my development down rather than help speed it up.  As a result I stopped learning Symfony and began looking at the other two popular PHP frameworks.

<h2>CodeIgniter</h2>

I never tried programming with CI but from what I read I actually liked what the software provided.  My biggest irk about the project was its close tie to the commercial ExpressionEngine.  Although probably not based on any pieces of truth I could not shake the feeling that by using CI I was using a hand-me-down relative of ExpressionEngine.

Now this is perhaps in no way based on reality but it was my subjective feeling that I got when reviewing the websites.  It was that feeling that pushed me away from trying to use CodeIgniter for my project.

I only write this so that the creators of CodeIgniter know that these sentiments and perceptions exist (perhaps only within me).  However if its more widespread it should be addressed so as to not lose potential users of the framework.

<h2>Yii</h2>

I was very apprehensive about using Yii.  It’s mostly known as the ‘new-kid’ on the block in terms of PHP frameworks.  It's a framework that doesn’t seem to have as much real world experience as other PHP frameworks as there doesn’t seem to be a wealth of sites using it in their production environment.  Nevertheless this was the last choice I had in the realm of PHP and I wanted to see what it had to offer.

Yii is a very solid PHP framework.  There is a pretty thorough <a href="http://www.yiiframework.com/doc/guide/">guide to Yii</a> that I went through and tried out.  It’s a very solid introduction to the framework that showcases its code design decisions and teaches you how to use the framework along the way.  I liked it and started programming my web app with Yii.

Things were going mostly well.  I hit a few speed bumps here and there that a Google search was fortunately able to solve (on Yii’s own message board no less - thumbs up for that).  I noticed a large amount of foreign writers (mostly Russian) frequenting the forum which led me to believe that Yii’s popularity lies mostly outside of the USA’s borders.  This left me slightly uneasy as I only speak English and I didn’t want to translate to find the answers to my questions.

Nevertheless I plugged forward and continued to code.  Yii’s guide was lacking in some aspects however <a href="http://www.yiiframework.com/doc/api/">Yii’s api reference</a> is absolutely amazing.  If more open source projects had documentation like Yii’s the open source community would be a safer and happier place.  The main problem with the API reference is not with the reference but - in my opinion - with Yii itself.

Yii provides a lot, and as a result it has a large codebase.  This led to frequent bouts of 8+ Chrome tabs open as I tried to triage the proper function to use for the effect that I wanted.  This happened a few times: once with relational support and once with helper function support.  After going through these maze-like quests to find what I wanted to do I realized that I had hit the wall.  Yii was no longer helping me.  It was getting in the way and I did not want that to happen.

That was one of my most important rules:  the framework is there to help me get my job done - not hinder me.  Of course there are points of friction when learning new software yet when I found myself continuously running into them I did not feel as if I was using the right software for the job.

<h2>Conclusion</h2>

One of the largest problems I continuously saw when looking for a suitable PHP framework to use was the discord in the PHP community.  There aren’t any dominant PHP frameworks (Zend aside which I will forever gloss over due to complete lack of interest).

As a result of there not being one ‘true’ PHP framework that everyone agrees is the best one to use most development efforts are divided among the available PHP frameworks.  Were these development efforts united under one project not only would the amount of developers supporting the software increase but it would also help decrease decision fatigue.

When I was searching for what PHP framework to use I found myself growing quickly tired trying to decide which one was the best and which one would help me the most.  After a while I had to put blinders on and just start trying to use each PHP framework that I wanted but the process to get there was much longer than it should have been.

Perhaps I’m unique in this situation but I doubt it.  If there were only two frameworks to choose from, or frameworks that were obviously created for entirely different purposes that would have made my decision making process umpteenth times easier.

Yet at the end of the day I found myself striking out.  Whether for subjective or real reasons I did not enjoy my experiences with any of these PHP frameworks.  Also my pinky finger got really tired holding shift so that I could write $ all the fricken time.  It’s the small things that matter and all those $ add up.

I’ve now decided to try my hand at Ruby On Rails.  It’ll do me good to try my hand at another language.  I’ve already ported over what code I had so far from Yii in about half the time it took me to originally create.  I’m liking it so far and will of course update again with future reflections.

<em>Update:  <a href="http://blog.harrywolff.com/my-experience-with-ruby-on-rails-as-a-php-developer/" title="My Experience with Ruby On Rails as a PHP Developer">Check out my thoughts and reflections of my time spent developing with Ruby on Rails</a></em>
