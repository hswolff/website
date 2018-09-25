---
title: The Best Mac Git Gui
slug: the-best-mac-git-gui
date: 2012-01-30T14:51:43.000Z
updated: 2013-12-30T20:59:32.698Z
tags:
- favorite
- git
- gitbox
- gitx
- gui
- list
- review
- reviews
- sourcetree
- technology
- tower
- Tutorials
---

<a href="http://en.wikipedia.org/wiki/Git_(software)">Git</a> is one of the most powerful and effective revision control systems available. It's lightweight and highly configurable, complimenting almost anyone's programming workflow. Predominately you interact with git from the command line, inputting commands such as `git status` or `git commit` to manipulate your repository.

When you first learn git the CLI can be daunting and confusing. Browsing through your history of commits with `git log` is not efficient. Even after you learn a few tricks such as `git log --graph --oneline --all` it remains difficult to really explore your history.

This is why a git GUI can put the joy back into using git.

<!--more-->

This article is focused on git GUIs for Mac OS X running 10.5 or greater. As I find new git GUIs I will add them to this list, hopefully making a canonical collection of Mac git GUIs.

<hr />

<h2>GitX</h2>
GitX is one of the most popular open-sourced Git GUI for the Mac. Subsequently it has been the source of numerous forks. Here's three of the best forks I know about.
<h2><a href="http://gitx.frim.nl/">GitX - Pieter</a></h2>
![](/images/posts/2012/01/GitX-pieter01.png)
![](/images/posts/2012/01/GitX-pieter02.png)

The first GitX version released was created by <em>pieter</em> on his GitHub account. This version is highly stable however it lacks two very important things: features and active development. The last time this version of GitX was updated was on <a href="https://github.com/pieter/gitx/commits/master">Oct 2nd, 2009.</a> Due to the lack of a development cycle the UI has begun to show its age. To toggle between viewing your history and staging a commit isn't as intuitive as other git GUI clients. This version is quite minimal in that regard: you can view your history, stage commits, and commit.

Pros
--
Stable
Free

Cons
--
No active development
Non-intuitive UI


<h2><a href="http://gitx.laullon.com/">GitX (L)</a></h2>
![](/images/posts/2012/01/GitX-l01.png)
![](/images/posts/2012/01/GitX-l02.png)
![](/images/posts/2012/01/GitX-l03.png)
[gallery include="2149,2148,2147" size="medium"]
This is one of the more popular GitX forks available. It was my client of choice until I discovered one big problem this fork has: it runs very slow with large repos. When I first began using GitX (L) my repos were small enough that it ran fine. However as soon as my repo grew this fork couldn't keep up. Every time I'd refresh my history of commits I'd have to wait upwards of 30 seconds for it to finish scanning my log history.

Aside from the performance issues on large git projects this fork brings a lot of nice UI improvements. The overall usability of this GitX client is great. The screens are clearly laid out, easy to navigate, and the GUI doesn't get in the way should you want to drop into a CLI and directly type in some git commands.

Pros
---
Free
Easy commit history view
Shows how far ahead/behind your branch is with a remote branch
Staging commits is easy and fast
Easy to view and checkout tags, branches, and stashes

Cons
---
Very slow on large repositories

<h2><a href="https://github.com/rowanj/gitx">GitX - Rowanj</a></h2>
This GitX version is forked off of GitX (L). As such it has all the pro's of GitX with some noticeable differences. The best difference is its performance on large repos: it's fast. It's able to load commits just as fast as the native git client. As noted on the GitHub page there are other fixes in this version which I'm sure help with its stability as I have been using this GitX client for a while without any crashes. My only negative about this fork is it removed from the UI how many commits you were ahead or behind of a remote branch.

Pros
---
Free
All the pros of GitX (L)
Very fast loading of large repos

Cons
---
Removed UI view of how many ahead or behind your branch is of a remote branch

<h2><a href="http://gitboxapp.com/">Gitbox</a></h2>
![](/images/posts/2012/01/Gitbox-01.png)
![](/images/posts/2012/01/Gitbox-02.png)
![](/images/posts/2012/01/Gitbox-03.png)

Gitbox prides itself on its minimalism. The UI is calm but plain, with few buttons available to push, allowing you to focus on your commit history and staging. It doesn't have a built in diff app so by default it makes use of FileMerge but is compatible with a range of 3rd-party diff applications. Most of what you see in Gitbox is fairly easy to do in a CLI, however if you must have a GUI for those tasks then Gitbox is the GUI for you.

Pros
---
Free for 1 repo
Minimalistic
Fairly fast

Cons
---
Paid for more than 2 repos
Un-intuitive UI for staging
Features hidden in dropdown boxes
Not enough UI features to justify GUI

<h2><a href="http://www.git-tower.com/">Tower</a></h2>
![](/images/posts/2012/01/tower-01.png)
![](/images/posts/2012/01/tower-02.png)

Tower is one of the more full-featured git GUI clients available. Nearly everything that you would want to do with git you can do with Tower. This makes for a very powerful GUI however one that can be intimidating on first blush. Each screen has a lot going on as it seems that the creators of Tower tried to implement nearly everything you could do with git in the CL with a GUI. This makes for screens bursting with buttons and tabs and tables of information. If you really don't like the CL then Tower is a suitable choice for you.

Pros
--
Full-featured - can do nearly everything via GUI
Pretty UI
Adopts OS X UI standards

Cons
--
Paid, $59 for a license
Crowded UI
Lots of buttons

<h2><a href="http://www.sourcetreeapp.com/">SourceTree</a></h2>
![](/images/posts/2012/01/sourcetree-01.png)
![](/images/posts/2012/01/sourcetree-02.png)

This GUI is another full-featured one that rivals Tower. Where it differs significantly is the price: SourceTree is freely available in the Mac App store. That's a nice convenience that makes installing this GUI a breeze. Another nice feature of SourceTree is it is able to load Mercurial repositories alongside git repositories. Like Tower you can do almost anything through SourceTree that you can do through the git CL client. SourceTree also has a lot of buttons in its UI however I found these UI elements to be more intuitive than Tower's. SourceTree makes a lot of things automatic and easy to use, making it one of the best choices for a git newbie.

Pros
---
Freely available in Mac App Store
Full-featured
Fast

Cons
---
Lots of buttons
Some tasks easier to perform via CL

<hr />

<h2>Conclusion</h2>

And that wraps up all the git GUIs that I know of! It should go without saying but your mileage may vary so pick the GUI that best suits you. What I might not like about Gitbox might be what you love about it, and that's ok.

I will warn that using a git GUI exclusively is a bad idea. You should learn how and why git works the way it does. Inevitably you will run into some weird problem and solely relying on a GUI to help you could lead to even more problems. Learn the git command line client. When you know it then enjoy the benefits of a GUI to speed up your workflow.

I personally use GitX - Rowanj to stage my commits and search my commit history. I use the command line for almost everything else. I push, merge, and rebase exclusively through the command line, giving myself complete control over my git commits.

Whatever GUI you pick just make sure it works for you and you aren't working for it. With that said, get coding!
