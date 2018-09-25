---
title: Prune Remote Git Branches
slug: prune-remote-git-branches
date: 2011-10-13T11:41:06.000Z
updated: 2012-04-03T10:15:45.000Z
tags:
- cleanup
- code
- favorite
- git
- prune
- technology
- version control
---

Git is a wonderful version control system.  It’s light, nimble, and fast.  It makes managing code amongst many developers a dream.

Unfortunately it has a fair share of quirks.

One of the quirkiest quirks that I’ve run into a couple times now is an issue with remote git branches.

When a remote git branch is deleted from the server your local repository doesn’t update its references.

The easy solution is to run this command:

<code>git remote prune origin</code>

This prunes and removes all remote branches that no longer exist.

<a href="http://kpumuk.info/development/memo-2-useful-git-tricks-with-remote-branches/">Full credit to Dmytro Shteflyuk for this tip.</a>
