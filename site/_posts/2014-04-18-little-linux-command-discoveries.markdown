---
layout: post
title:  "Little Linux command discoveries"
date:   2014-04-18 09:10:21
categories: linux command discover
---

There are several commands that I have come across yesterday that were helpful.

1. `git config --global core.editor emacsclient` - make git use `emacsclient`
for editing commit messages.
2. `git config --global core.pager ''` - make git output everything to standard
output, rather than use a pager application.
3. `git log HEAD~10..HEAD` - make `git log` show only last 10 commits.
4. `git log --pretty=oneline | head -n 10` - make `git log` show last 10
commits, displaying one line per commit.
5. `xrandr --output LVDS --brightness 1.0` - make screen brightness 100%.

It is interesting to observe how well the
[UNIX philosophy](http://en.wikipedia.org/wiki/Unix_philosophy) works. A UNIX
program does only one job, but it does it well.
