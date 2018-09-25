---
title: Import Posterous Posts Into WordPress
slug: import-posterous-posts-into-wordpress
date: 2012-01-02T10:03:08.000Z
updated: 2012-10-05T17:34:12.000Z
tags:
- export
- import
- posterous
- technology
- Tutorials
- wordpress
---

<strong>Update:  This method no longer works as pointed out in the <a href="http://blog.harrywolff.com/import-posterous-posts-into-wordpress/#comment-672706711">comments below</a>.</strong>

Even though I've been using Posterous to host my photo blog for the past few months I've begun to grow weary of not using WordPress.  While Posterous is easy to use I don't  feel like I'm in complete possession of all the content I've been creating.  With that in mind, last night I started the process of exporting my Posterous posts and importing them into a WordPress installation.

Exporting posts from Posterous was not as easy as I had hoped.  There is no native export tool on Posterous' website nor any 3rd-party Posterous export tool.

After a fair amount of searching I found the only way to get my posts out of Posterous was to use WordPress' <a href="http://wordpress.org/extend/plugins/posterous-importer/">import Posterous tool</a>.  
<!--more-->
I first tried to use this on a WordPress installation on my local machine.  However when I tried running the tool I was met with an error.  After a few redundent retries I realized I wasn't going to have any success using this method.  Also a <a href="http://wordpress.org/support/topic/plugin-posterous-importer-403-error-message-when-running">post on the plug-in's forum page with the same error</a> confirmed my suspicions that this method was broken.

I'll be honest I took a five minute break after that set back.  I think it may have even been a bathroom break.  After that I got back to work.

My next attempt to get my posterous posts was to create a new WordPress.com blog and try the importer tool from there.  Guess what?  It worked.  Not greatly surprising but a little dissapointing.  Generally WordPress keeps their hosted and self-hosted installations to feature parity, however in this case it may be an error on Posterous' side.  But really, who can truly tell?

I ran into one small bump while using the WordPress.com Posterous importer.  After I ran the importer the first time I saw that I was missing some of my most recent Posterous posts.  It seems that Posterous was rate limiting the import request, so after waiting five minutes I re-ran the posteorus importer and saw 10 more posts get successfully imported.  I did this cat and mouse game a few more times -  wait 5 minutes, run the importer -  before I was able to successfully import all of my Posterous posts.

So now with all my Posterous posts in a WordPress installation I have a very exportable and 'ownable' copy of all my data.  And with that I'm a very happy man. :)
