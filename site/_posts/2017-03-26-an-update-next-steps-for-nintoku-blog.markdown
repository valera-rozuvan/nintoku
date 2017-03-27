---
layout: post
title:  "An update: Next steps for Nintoku blog"
date:   2017-03-26 14:49:03
categories: update nintoku blog future
tags:
- update
- nintoku
- blog
- future
---

Some of you might have noticed that this place hasn't been updated in a while. Mostly this is due to the fact that I
ran out of free time when my daughter was born last year. Oh - what fun it is to raise a child - especially during
the first year of his (or her) life. But enough of complaining. This post is about something totally different.

I decided to rewrite this blog. That is - the underlying static site generator engine. Right now I use
[Jekyll](https://jekyllrb.com/), which in turns uses [Ruby](https://www.ruby-lang.org/). Jekyll generates all
of the pages of this blog, including the one you are reading right now. I find it somewhat of a pain to install
Jekyll on each new system that I use at work (especially if I have to work inside Windows). So I plan to create
a site generating engine for my needs using [Node.js](https://nodejs.org/). At least a simple one at first. Why
Node.js? Because it is one of the tools that I use for my work. Also, because I love JavaScript :)

Now I know that there already exists several static site generators written in JavaScript (Node.js). In fact, here
is a list of the top 12 JavaScript static site generators (this list is based on my own research):

1. [Gatsby](https://github.com/gatsbyjs/gatsby)
2. [Spike](https://github.com/static-dev/spike)
3. [Roots](https://github.com/jescalan/roots)
4. [assemble](https://github.com/assemble/assemble)
5. [Hexo](https://github.com/hexojs/hexo)
6. [Metalsmith](https://github.com/segmentio/metalsmith)
7. [MMPilot](https://github.com/kunruch/mmpilot)
8. [Cabin](https://github.com/CabinJS/Cabin)
9. [Wintersmith](https://github.com/jnordberg/wintersmith)
10. [Harp](https://github.com/sintaxi/harp)
11. [Punch](https://github.com/laktek/punch)
12. [DocPad](https://github.com/docpad/docpad)

Why I want to create a new one? I have considered this question, and really do have some answers :) First of all,
I want to work on a simple coding project in my spare time. Secondly, I want to completely understand the inner
workings of my blogging engine. Lastly, I want full ownership of the code that generates my blogging engine so that I
can modify it to my heart's content. So I really do want to create another static site generator!

So what does the future hold for me? As always, I decided to name my static site generator **myuzu**. It's code
will live on GitHub at [https://github.com/myuzu-net](https://github.com/myuzu-net). I really do wish for this project
to happen, so I am off to coding.
