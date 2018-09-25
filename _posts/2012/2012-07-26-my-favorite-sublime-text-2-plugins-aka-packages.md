---
title: My Favorite Sublime Text 2 Plugins aka Packages
slug: my-favorite-sublime-text-2-plugins-aka-packages
date: 2012-07-26T08:14:01.000Z
updated: 2013-12-30T20:41:40.020Z
tags:
- code editor
- favorites
- list
- plugins
- programming
- sublime text 2
- technology
- text editor
- editor
- guide
---

<p>The current code editor that is widely in vogue amongst programmers is far and above Sublime Text 2. There's many reasons that ST2 usurped this crown previously held by TextMate (it's new and actively maintained) but one of the biggest reasons is its ability to have its core functionality extended via plugins.</p>

<p>The plugins that you can install for ST2 make this otherwise light weight text editor all that much more powerful and effective - but only in the areas you care about.</p>

<p>I've grown particularly attached to a couple of ST2 plugins. Ones that I know that if I hadn't found them my love for ST2 wouldn't be as strong as it currently is.
<!--more-->
So in a very particular order what follows are my favorite and most appreciated plugins for Sublime Text 2 that I use on a daily basis.</p>

<p><strong>Note:</strong>  It is of tremendous help to know of one keyboard shortcut for ST2 that lets you easily access the majority of the following plug-ins:  <code>Cmd+Shift+P</code>.  Hit that keyboard shortcut and you'll see the Command Palette at the top of your ST2, in which you can take advantage of ST2's fuzzy search to find the particular feature you want to use.</p>

<p><a href="/images/posts/2012/07/st2_command_palette.png" rel="attachment wp-att-2433 lightbox[st2]"><img src="/images/posts/2012/07/st2_command_palette-300x193.png" alt="" title="st2_command_palette" width="300" height="193" class="aligncenter size-medium wp-image-2433" /></a></p>

<h2><a href="http://wbond.net/sublime_packages/package_control">Package Control</a></h2>

<p>Without this plugin your entire ST2 plug-in experience will be dismal.  I say this with all sincerity and seriousness: Package Control makes packages fun and easy to use.</p>

<p>Basically Package Control connects to a remote server that holds a large public list of published packages for ST2.  It can then download any of those plug-ins and install them directly into your copy of ST2 without ever moving your mouse.  It's a wonderful experience, one I feel that should have have been included by default in ST2.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Open Command Palette (Cmd+Shift+P)</li>
<li>Type 'pa in' - you should see 'Package Control - Install Package' highlighted at the top.</li>
<li>Type 'SublimeLinter', hit enter and voila!  SublimeLinter is now installed!</li>
</ol>

<h2><a href="https://github.com/SublimeLinter/SublimeLinter">SublimeLinter</a></h2>

<p>SublimeLinter was one of those packages that I originally thought it'd be neat to have but I wouldn't really need. I couldn't have been more wrong.</p>

<p>SublimeLinter has quickly shot to the top of my list of must have packages, becoming an integral part of my productivity suite.</p>

<p>After installing SublimeLinter you will be linting your code as you type. This means that you can not only see what syntax errors you might be creating but you can also catch code style issues (Python’s PEP8 I'm looking at you).</p>

<p>The ability to lint your code as you type has helped me catch countless careless mistakes. Let's say I forgot to include a closing parenthesis. Rather than executing my code only to find an error I'm able to see the error as I write it and correct it right then and there. This saves me time, stress, and grief.</p>

<p>Another area that I've found SublimeLinter to be of great help is when learning a new language. Think of SublimeLinter as a bowling lane with the bumpers put in. It helps keep you between the lines of the language, nudging you toward real code when you start to veer to the edges.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Create a JavaScript file and type in a simple if statement. </li>
<li>Don't put the if statement in parenthesis.</li>
<li>See the live linting do it's magic. </li>
<li>Profit. </li>
</ol>

<p><a href="/images/posts/2012/07/sublimelinter.png" rel="attachment wp-att-2439 lightbox[st2]"><img src="/images/posts/2012/07/sublimelinter-300x140.png" alt="" title="sublimelinter" width="300" height="140" class="aligncenter size-medium wp-image-2439" /></a></p>

<h2><a href="https://github.com/titoBouzout/SideBarEnhancements">SideBarEnhancements</a></h2>

<p>I'm not entirely sure why this plugin isn't included by  default. It gives you a wealth of options when right clicking files in ST2’s sidebar.</p>

<p>You can delete a file, duplicate it, and any other file operations you can think of.</p>

<p>I use this plugin all the time when creating a new JS file or CSS file. Before I'd have to open up Terminal or Finder to do any simple file system manipulation. This plugin saves me that time and distraction away from ST2.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Open a saved file in ST2. </li>
<li>Right click on the file. </li>
<li>Behold the multitude of options now at your fingertips. </li>
</ol>

<p><a href="/images/posts/2012/07/sidebarenhancements.png" rel="attachment wp-att-2438 lightbox[st2]"><img src="/images/posts/2012/07/sidebarenhancements-218x300.png" alt="" title="sidebarenhancements" width="218" height="300" class="aligncenter size-medium wp-image-2438" /></a></p>

<h2><a href="https://github.com/ehamiter/ST2-GitHubinator">GitHubinator</a></h2>

<p>This is such a simple lovely plugin.</p>

<p>Basically if you're working on a project whose repo is also on GitHub you can quickly open the GitHub page of that file through a keyboard shortcut.</p>

<p>I use this all the time at work to easily link a co-worker to a line of code that I might need help with.</p>

<p>Again it's the time this plugin saves me that makes it so valuable. It's not hard to open GitHub and navigate to the file, however it's something that can be automated and that's what this plugin does.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Open a local repo that is on GitHub. </li>
<li>Go to any random file and line. </li>
<li>Either hit Cmd+&#92; or right click on the document and hit ’Githubinator’ to see the plugin in action. </li>
<li>Find yourself on the GitHub page of that file. </li>
</ol>

<h2><a href="https://github.com/kemayo/sublime-text-2-git">Git</a></h2>

<p>This plugin brings the power of the Git command line to ST2.</p>

<p>You can run git status through the Command Palette and ST2 will open a new file tab to show you the results.</p>

<p>Or you can git log. Or a git blame. Honestly that's how I use this plugin the most. To run a quick git blame to see which one of my co-workers I can ping for help on a line of code they wrote.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Open a file in a local git repository. </li>
<li>Open the Command Palette (Cmd+Shift+P). </li>
<li>Type ’git blame’ and hit enter. </li>
<li>A new ST2 tab will open with the git blame output. </li>
</ol>

<p><a href="/images/posts/2012/07/git-blame.png" rel="attachment wp-att-2437 lightbox[st2]"><img src="/images/posts/2012/07/git-blame-300x167.png" alt="" title="git-blame" width="300" height="167" class="aligncenter size-medium wp-image-2437" /></a></p>

<h2><a href="https://github.com/sublimator/ZenCoding">ZenCoding</a></h2>

<p>I was curious about the excitement around ZenCoding for a while. It wasn't till installing the ST2 package and playing around with it that I become a complete convert to the ZenCoding way of life.</p>

<p>ZenCoding makes scaffolding new layouts a complete breeze by taking your shorthand DOM structure and expanding it to full HTML tags.  Rather than having to monotonously type ever closing tag for every new <code>&lt;div/&gt;</code>  ZenCoding takes care of that for me, expanding and creating the tags it knows I want to use.</p>

<p>ZenCoding saves times, and for me that's what makes it so valuable.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Open a new file. </li>
<li>Type: <code>table&gt;(tr&gt;td*2)*3</code></li>
<li>Hit tab. </li>
</ol>

<h2><a href="http://xavura.github.com/CoffeeScript-Sublime-Plugin">CoffeeScript</a></h2>

<p>I've recently become a big fan of CoffeeScript.  Unfortunately ST2 doesn't ship with language support for CoffeeScript file.</p>

<p>Fortunately there's a plugin that gives ST2 CoffeeScript syntax support.  And thank goodness it does because I would not enjoy writing CS without proper syntax highlighting.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Open a CoffeeScript file. </li>
<li>See how wonderfully highlighted the file is. </li>
</ol>

<h2><a href="https://github.com/buymeasoda/soda-theme/">Theme - Soda</a></h2>

<p>Theme - Soda isn't really a plugin per se, however it is installed like one.  Don't get me wrong, the default theme of ST2 isn't painful to look at, however I have found this theme to be more joyful to use while I'm coding throughout the day.</p>

<p>There's a light and dark theme, so depending on your preference there's a Soda theme that's right for you.  Also be sure to find your favorite color scheme to match, or you can just <a href="https://github.com/buymeasoda/soda-theme/#bonus-options">use the one Soda uses</a>.</p>

<strong>Quick Demo of Awesomeness</strong>

<ol>
<li>Activate the Soda Theme. </li>
<li>Close and reopen ST2. </li>
<li>Enjoy the new prettiness. </li>
</ol>

<h2>Wrap Up</h2>

<p>So there you have it, my favorite Sublime Text 2 plugins aka packages. These are the ones I couldn't live without however I also make use of quite a few other plugins.</p>

<p>I encourage you to <a href="http://wbond.net/sublime_packages/community">browse the list of published packages</a> to see of there's one there that will make your daily coding experience that much more enjoyable. After all, every bit helps to make coding on a daily basis a pleasurable experience.</p>

<p>If you have any packages you use that you can't live without please let me know about them in the comments! I'm always on the lookout for that next best package.</p>

<p>Who knows?  Maybe you'll even create it :).</p>

