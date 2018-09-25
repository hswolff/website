---
title: "Taming The Jungle: Working With New Code"
slug: taming-the-jungle
date: 2013-06-27T13:07:05.000Z
updated: 2013-07-03T09:35:35.000Z
tags:
- code
- essays
- learning
- new job
- programming
---

<p>An undervalued skill of the common developer lies in their ability to navigate and explore a new code base.  Although not the most glamorous or fun task, it is the one that almost always consumes most of a developers working hours.</p>

<p>Despite the percentage of time this work consumes, it is a topic that is seldom discussed on the internet.  Reason for that is simple: it's not fun.  It's not fun understanding someone else's code, pondering why they arranged code the way they did, why names are named the way they are, and what performance enhancement drugs they were on.</p>

<p>At every job I've started I've had to enter the jungle that is "someone else's code". Along the way I've come up with a few strategies to mitigate the pain. Some are obvious while others are even more obvious.</p>

<p>And please: if you know of any other strategies to reduce the pain of learning a new code base I would love to hear it.  I'm sure everyone reading this post will appreciate it as well.
<!--more--></p>

<h2>How Is The Code Structured?</h2>

<p>First thing I always ask when encountering a new codebase is, 'How is the code structured?'  To elaborate: from the time a client makes a request to when the client's browser renders the web page: what is going on?</p>

<p>Where is the entry point?  How is it funneled through the server side code?  Where is the client side code initiated?</p>

<p>Where are the pertinent files in the directory structure?  Are there any weird gotchyas with callbacks executing critical code in a non-obvious way that without the callback nothing would ever render?</p>

<p>These are the questions I ask both myself and my new co-workers.  I try to get a grip on the code, understand the general 'lay of the land' if you will.</p>

<p>This is the part of the process where I want a high-level view of 'what is going on?'. The details of the process are distractions at this point: all I need is a working knowledge of all moving parts.</p>

<p>This process takes anywhere from a day to a week in my experience.  Usually I take around two days to get a general idea of how the code is structured and what it's comprised of.  At this point I have a naive understanding of the entire system, enough that I feel confident that I'll be able to make changes, which is the second thing I usually do.</p>

<h2>How can I change code and see the results of my work?</h2>

<p>In the great words of Yoda, 'Do or do not, there is no try.'</p>

<p>There is no better way to learn something than by trying it out and actually doing what you are learning.  This is true for everything (everything!) including learning code.</p>

<p>When I am given a small starting task at a new job I take an oblong approach: rather than attack it head on I reduce the task to the smallest unit of provable success.</p>

<p>For example if I am tasked to add myself to the about page I'd want to do two things:</p>

<ol>
<li>Find the file that I think is the about page.</li>
<li>Add the most obvious edit to make sure that a) I'm editing the right file and b) that there is nothing else in-between editing the file and seeing that change reflected.  (My personal favorite edit is along the lines of &lt;h1&gt;Pandas Rock&lt;/h1&gt; appended to the &lt;body&gt; of the page.)</li>
</ol>

<p>Rather than assume I am doing everything correct, I actually prove it to myself and avoid working on something that could very well be wrong.</p>

<p>The about page that I'm editing may be an outdated one that is no longer used, however still exists in the repository and as such is often confused with the one used in production.  By simply testing to make sure I'm in the right place, and doing the right thing, I save myself wasted dev cycles and frustration.</p>

<p>This process of orienting myself before making changes further cements my knowledge and understanding of the code base, and prevents me from getting lost.  By forcing myself to always breach the surface and take a gasp of air (i.e. seeing my changes reflected) I'm able to take a dive into the code base to find what I need.</p>

<p>As I'm able to hold my breath longer (i.e. my knowledge of the codebase increases) my need to come up for air and double check I'm in the right place decreases.</p>

<h2>What were the design ideas?</h2>

<p>After my memory of the code base begins to solidify and coalesce I begin to ask more introspective questions.  I begin to wonder why things were done the way they were and what was the reasoning behind these decisions.</p>

<p>These questions allow me to gain a deeper and more intimate understanding of the code and my co-workers.  Rather than assume an aspect of the code I find un-intuitive is the result of poor decision making I can ask to find out how it came into existence.</p>

<p>Perhaps as the project was developed requirements changed, causing a rush of modifications that resulted in the code that I had just assumed was the result of poor choice. I may have even taken my assumptions as far to assume the developer that came before me hated his own kind and wanted all those who came after him to suffer!  What a thought!</p>

<p>Through understanding of the why I can at least appreciate and reconcile my differences with the code rather than begrudge it. Not only that I can find my co-workers dislikes and work together to fix our problems.</p>

<p>Another benefit of understanding the ideas behind the code is its ability to strengthen and deepen my knowledge.  While I may have wondered why some component had a certain name that was not representative of its usage, I may learn it once did what it is named to do and why it was changed.</p>

<h2>Getting out of the jungle alive</h2>

<p>Every code base is unique.  Sure, there are overlaps that will make learning a new code base easier: if you use a framework (Ruby on Rails) or follow a common architecture (MVC).  However the spirit of the code lies in the details, and those are near impossible to clone.</p>

<p>So you must enter the jungle that is a new code base.  With or without trepidation, you must plunge in head first, without knowing what you'll find.</p>

<p>And after some time you'll exit the jungle.  You'll come out wiping your hands free of dirt, turn around, and see a playground with a brand new swing set.  It's the same code base, but now you know what's inside, and you know the fun you can have.  Sure you may add some renovations (always need a vomit wheel), but that jungle will have been tamed.  And in taming the jungle, you'll now be free to build your own.</p>

