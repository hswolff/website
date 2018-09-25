---
title: Upgrading to Sublime Text 3
slug: upgrading-to-sublime-text-3
date: 2013-05-11T22:15:29.000Z
updated: 2014-08-24T19:24:31.264Z
tags:
- programming
- sublime text
- upgrading
---

When Sublime Text 3 was released I groaned along with many others. Why a new version? What are the incompatibilities? But most importantly: Will all my old packages that I know and love still work??

After attempting (and succeeding) in upgrading to ST3 and trying to <a href="http://blog.harrywolff.com/my-favorite-sublime-text-2-plugins-aka-packages/">install all my old plugins</a> I know, love, and use daily I can safely say: the old packages work! They work! And it's glorious!

There is a but here: the process of installing some plug-ins is not as plug and play as it is for Sublime Text 2. There is a certain amount of 'getting your hands dirty' work required - namely using git to check out the ST3 compatible branch. Aside from that you'll leave the process without any stains on your newly washed white shirt.

So let's dive in, shall we?
<h2>Installing Sublime Text 3</h2>
You're a responsible developer right? You've paid for Sublime Text 2 already right? Supporting a brethren developer's hard work, putting food on his table, a new Retina MacBook Pro in his lap?

You have? Good. Cuz that's all that's required to download ST3: an active and valid ST2 license.

After that's all squared away head over to the <a href="http://www.sublimetext.com/3">Sublime Text 3</a> download page and commence with the installation.

Tip: You can install ST3 alongside ST2 without any modifications to either program. Each install to separate application names and 'Application Support' directories without needing any user intervention. Interestingly enough the application name for ST3 is 'Sublime Text'. Seems Jon Skinner's gone back in time with this change.
<h2>Install Package Control (for ST3)</h2>
Ready to get down and dirty with git? Of course you are.

The Package Control website plainly instructs <a href="http://wbond.net/sublime_packages/package_control/installation#ST3">how to install Package Control for Sublime Text 3</a>.

I could regurgitate those instructions here but I'd rather not muddy the internet with cloned instruction sets. If you have any issues with this part feel free to <a href="https://twitter.com/hswolff">ping me</a>.
<h2>Using Package Control to install packages</h2>
For most packages I was able to use Package Control without any issue.

The packages I have currently installed and working brilliantly are:
<ul>
	<li>CoffeeCompile</li>
	<li>CoffeeScript</li>
	<li>Emmet</li>
	<li>GitGutter</li>
	<li>GitHubinator</li>
	<li>LESS</li>
	<li>SideBarEnhancements</li>
	<li>sublime-closure-linter</li>
</ul>
However there were two packages I do use daily that I didn't want to lose that did require a bit more manual labor.
<h2>Installing SublimeLinter for ST3</h2>

<em>Update:  SublimeLinter has been updated to natively support Sublime Text 3.  You can now easily install SublimeLinter straight from Package Control.  Yay!</em>

Ready for some more git wizardry?

Follow these four simple steps:

```
cd ~/Library/Application Support/Sublime Text 3/Packages
git clone https://github.com/SublimeLinter/SublimeLinter.git
cd SublimeLinter
git checkout sublime-text-3
```

Yey fun, you're done!

<h2>Installing Soda Theme for ST3</h2>
Ready for some intense deja vu?

Follow these four simple steps:

```
cd ~/Library/Application Support/Sublime Text 3/Packages
git clone https://github.com/buymeasoda/soda-theme/ 'Theme - Soda'
cd 'Theme - Soda'
git checkout soda-st3
```

Yey fun, you're mostly done!

If you want to use the <a href="https://github.com/buymeasoda/soda-theme/#syntax-highlighting-colour-schemes">Soda Theme Color Schemes</a> follow the steps outlined exactly - just put them in your ST3 folder instead.

Et voilà Finito!
<h2>Conclusion</h2>
I'm finding Sublime Text 3 to be a lot faster than ST2. Perhaps my (now old) install of ST2 has become bogged down with crap that it doesn't need, but in switching to ST3 I've found its fuzzy search to be leaps faster and I'm finding it's new fast open of files to be an interesting UX update (when you select a file in the project browser it now opens up a temporary tab instead of previously just showing the text in the code window. Hope that made sense).

Aside from speed ST3 is the future of ST2 and it's better to get on the bus as it's going through the station and before it's out in the country somewhere remote and unattainable. This metaphor went nowhere.

Looking forward to hearing your successes in upgrading to ST3. I also can't wait for the whole package community to fully embrace ST3 support. Should happy any day now, right? ;)
