---
title: Pro VSCode Tricks
slug: pro-vscode-tricks
date: 2019-12-07
category: code
tags:
  - vscode
---

One of the most important things you can do to become a highly efficient programmer is to learn how to use your code editor. Most text editors, or [IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment), host a huge amount of functionality that help you code fast and efficiently. The only thing that sucks is that it can be very hard to learn all of those pro features - there's almost too much!

I've been using [VSCode](https://code.visualstudio.com/) now for over two years and I've picked up many shortcuts and tricks along the way that have become invaluable to how I code. In fact, I'm so efficient with VSCode that it's my goto program when I'm writing anything that has to do with text.

So, rather than keep all these secret tricks to myself I'd prefer to share them with you! Yes you, the reader of this article!

I imagine you're curious how you can super-charge your own VSCode usage, right? After all, that's why you're here!

And if you'd rather have me show you all these tricks then you're in luck as well! I have a wonderful video already recorded and edited for your viewing entertainment:

<iframe src="//www.youtube.com/embed/l4ANg098TlI" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

However, if you're the reading sort, behold! All my Pro VSCode Tricks!

## Navigation Shortcuts

These keyboard shortcuts help me move around VSCode without ever reaching for my mouse. They're simple quality of life improvements, but when taken together add up to an immense amount of value.

These shortcuts help me change the layout of VSCode, which depending upon what I'm doing, is of great help.

### Toggle Side Bar Visibility: Command ⌘ + B

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/toggle-side-bar.mp4" type="video/mp4" />
</video>

If I need more horizontal real estate this is my go to move. It hides the side bar so I can focus only on the code in front of me.

### Toggle Bottom Panel: Command ⌘ + J

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/toggle-bottom-panel.mp4" type="video/mp4" />
</video>

This is the sister command to the one above. This lets me hide or show the bottom panel so I get more vertical real estate.

With these two powers combined I get a full screen window without switching to full screen mode!

### Open Terminal: Control ⌃ + `

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/open-terminal.mp4" type="video/mp4" />
</video>

I use this to jump into the terminal to do some CLI work. I used to use this command a lot more before I learned about the toggle bottom panel command, but it's still a useful one to know.

### Open Explorer: Command ⌘ + Shift ⇧ + E

![](/images/posts/2019/vscode-pro-tricks/explorer.png)

The Explorer is that big tree that lists all the files in your current project. It's the one that you probably use all the time to jump between different files. If you ever need to go straight to there then this is the shortcut for you.

### Open Search: Command ⌘ + Shift ⇧ + F

![](/images/posts/2019/vscode-pro-tricks/search.png)

Likewise, if you want to do a global search over all the files in your project you can jump directly to the global find pane.

## Project Manager

![](/images/posts/2019/vscode-pro-tricks/project-manager.png)

[Project Manager is actually an extension.](https://github.com/alefragnani/vscode-project-manager) However it's one that I rely on all the time.

It lets me set a list of projects that I'm actively working on and lets me quickly jump between them.

Saves a lot of time to having look up where the directories are in my file system, I can just search by the project name and be on my way.

## Selection Pro Moves

Oh man...this is by far the bread and butter of all my pro moves. This is how I'm able to make multiple modifications all at the same time, saving me seconds every day. Seconds! You add up those seconds and it turns into a full day! I'm going to save you a day's worth of time!

Also you'll look really cool doing this.

### Select Multiple Words: Command ⌘ + D

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/select-multiple-words.mp4" type="video/mp4" />
</video>

This one is very hard to explain in words. Basically if you have some word on a page you can select it, and then hit Command ⌘ + D to select the next instance of this word. This becomes awesome when you're editing an array of objects in a JSON or JSON-like file.

If you have a key called 'name' you can expand your selection so that you select every 'name' word on the page and then you can make edits all at once.

Even further, once you've expanded your selection to all the places you want, you can then move your cursor around as you would before. So if you wanted to modify the value instead of the key you could hit right a couple of times and be on your merry editing way.

### Jump over words: Option ⌥

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/jump-over-words.mp4" type="video/mp4" />
</video>

This is actually a system wide shortcut, but one that I take advantage of in VSCode.

By default when you move your cursor with the arrow keys they move one by one. One by one, and it becomes very inefficient when you're trying to navigate across a lot of text.

If instead you hold down the Option ⌥ key and then navigate with the arrow keys it changes the behavior. Now you'll be jumping over words, letting you quickly move forward and backwords when moving code around.

Also if you hold Shift ⇧ on top of holding Option ⌥ you'll be able to select words at a time.

So, if you've made multiple selections using the trick above, and then hold Option ⌥ with Shift ⇧ you can then easily select multiple blocks of text and then can edit them all at the same time.

This is the super power-up combo that makes me feel like a dark wizard, and I love it.

### Move Line Up or Down: Option ⌥ + Up/Down

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/move-line-up-down.mp4" type="video/mp4" />
</video>

Let's say you have a variable assignment that you want to move up a few lines. If you use this trick that becomes a real quick job. You don't have to select the line, cut the line, move the cursor, paste the line. Just put your cursor on the line you want to move and use this trick to move it wherever you want.

This trick also works if you select multiple lines. If you have any number of lines selected and you use this shortcut then VSCode will move that entire block for you.

### Multiline Selection: Option ⌥ + Shift ⇧ + L

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/multiline-select.mp4" type="video/mp4" />
</video>

[Multiline Selection is another extension.](https://github.com/BCJTI/vscode-multi-line-tricks) This is functionality that was ported over from Sublime Text, and I got used to it there and was glad to see someone make a VSCode replacement.

Select multiple lines and then use this shortcut to make a cursor selection on every line.

I use this instead of the Command ⌘ + D shortcut when there isn't a common word to select on every line.

So it becomes very helpful if I have a couple of consecutive lines that I want to make the same edits to, but their contents are all different.

### Fast Line Removal: Command ⌘ + X

Did you know that VSCode has the ability to quickly remove a full line? This shortcut is actually for cutting text from the page, however if you don't have any text selected VSCode will fall back to the entire line.

So I use this a lot to quickly get rid of multiple lines of text by repeatedly hitting this shortcut.

There's an actual shortcut to delete a line but this one is so much easier to use.

## Built in VCS editor

![](/images/posts/2019/vscode-pro-tricks/built-in-vcs.png)

VSCode has an [excellent built-in version control system editor.](https://code.visualstudio.com/docs/editor/versioncontrol)

It's so good that it's replaced all the other GUIs I was using to manage Git.

Learn how to use it! It's powerful, flexible, and built right into VSCode!

One of my favorite things to do is staging a few lines from a changed file, rather than the entire thing. That's a real hassle in the CLI but an absolute joy using VSCode.

## Command Palette: Command ⌘ + Shift ⇧ + P

![](/images/posts/2019/vscode-pro-tricks/command-palette.png)

This trick is the end all be all shortcut. It lets you access every command possible within VSCode from a fast fuzzy-finder search. Type in anything you can think of and it'll show you the commands available.

For example if you type in "File" it'll show you commands to "Copy Path of Active File" and other similar ones.

It'll also show you the shortcut to that command if a shortcut exists. Such that you can use the Command Palette to learn and discover other shortcuts!

It's a shortcut to learning shortcuts!

## Easy prototyping

<video autoplay loop>
<source src="/images/posts/2019/vscode-pro-tricks/fast-prototyping.mp4" type="video/mp4" />
</video>

I use this trick a lot when putting together some example code.

I open a new file in VSCode.

Open the Command Palette (described above).

Select "Change Language Mode".

Search for the language I want (most commonly JavaScript).

And then I have a new file that has all the syntax highlighting and completions that I usually expect when coding that file.

Makes it really easy to create a new scratch pad to try out some ideas and still have them look as pretty as the rest of my other files.

## Pro: GitHub Pull Requests Extension

This is a bonus tip! This is also an extension, the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github). It's actually developed by Microsoft itself and under active development which are both great things.

I didn't use this extension for the longest time and then one day I gave it a try and oh man...I wish I had tried it out a long time ago.

What this extension makes easy is checking out code from a PR so I can play around with it locally.

This extension actually puts VSCode into 'Review Mode' where you can even add comments to the GitHub PR directly in VSCode! It's incedible!

And when you're done all you have to do is hit 'Exit Review Mode' and you're back to where you started. So cool!

## Get Practicing!

All these tricks require practice for you to become an expert with them.

Take one or two tricks at a time and try them out. See if you can get them to become muscle memory so that you start relying on them without even realizing it.

Once you got that shortcut under control then move onto another one.

These shortcuts are half the reason I enjoy using VSCode so much. I'm actually able to control it and have it do what I want with as minimal effort as possible.

I'm always on the hunt for more shortcuts or pro moves! I'm curios to hear what your VSCode pro moves are! Tweet at me or add a comment down below!

Happy VSCoding!
