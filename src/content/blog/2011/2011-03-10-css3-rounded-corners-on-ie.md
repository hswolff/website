---
title: CSS3 Rounded Corners On IE
slug: css3-rounded-corners-on-ie
date: 2011-03-10T12:53:44.000Z
category: code
tags:
  - css
---

One of the coolest new additions to the CSS3 specification is its built-in ability to render rounded corners. Before CSS3 the only semi-humane way to create rounded corners on an element was to create four rounded corner images and use some unwieldy albeit effective <code>display:absolute</code> positioning to get the desired effect. This resulted in bloated code that contained numerous extra <code>&lt;div&gt;</code> tags such as: <code>&lt;div class="topLeftCorner"&gt;&lt;/div&gt;</code> to create the effect, and ultimately bogged down the rendering of the page.

This onerous task has been thankfully and mercifully banished to the days of yore thanks to CSS3's <code>border-radius</code>. To create a rounded-border with CSS3 it is as simple as typing:

<code>
.rounder_corners {
   -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
          border-radius: 12px;
}
</code>

Now this is all well and good however the bane of every accomplished web developer is cross-platform compatibility - namely Internet Explorer. Unfortunately for all who code for the web most of the world still uses IE7 and IE8 as their web browser of choice. What's so horrible about this? IE6-8 does not suport CSS3's <code>border-radius</code> property, thus insuring that any IE6-8 user will not see your beautifully rounded corners. I'm choking up just thinking about the ugly pain. :(

So what's a web developer to do? Today I stumbled across (through <a href="http://html5boilerplate.com">html5boilerplate.com</a>) the most excellent and amazing <a href="http://css3pie.com/">CSS3 PIE</a> resource. PIE stands for Progressive Internet Explorer and the long and short of its awesomeness is that when it is included on your web page it equips every user running IE6-8 with the ability to render and display all the glorious benefits of CSS3 - including its <code>border-radius</code> property! Ugliness undone!
