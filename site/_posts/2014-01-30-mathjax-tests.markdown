---
layout: post
title:  "MathJax tests"
date:   2014-01-30 13:12:43
categories: mathjax tests
---

[MathJax](http://www.mathjax.org/) is an open source JavaScript display engine
for mathematics that works in all browsers. Some examples of what it can do are
provided below. Oh, and I wanto to point out how very awesome is it that the
markdown processor [kramdown](http://kramdown.gettalong.org) used on
[Nintoku](http://valera-rozuvan.github.io/nintoku/) supports
[math natively](http://kramdown.gettalong.org/syntax.html#math-blocks).

Inside **p** tag
----------------

<p>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>

Inside **span** tag
-------------------

<span>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</span>

Inside **div** tag
-------------------

<div>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</div>

Not in a tag
------------

When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

Now, we will use double dollar signs to surround math stuff.

Inside **p** tag
----------------

<p>
When $$ $a \ne 0$ $$, there are two solutions to $$ \(ax^2 + bx + c = 0\) $$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>

Inside **span** tag
-------------------

<span>
When $$ $a \ne 0$ $$, there are two solutions to $$ \(ax^2 + bx + c = 0\) $$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</span>

Inside **div** tag
-------------------

<div>
When $$ $a \ne 0$ $$, there are two solutions to $$ \(ax^2 + bx + c = 0\) $$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</div>

Not in a tag
------------

When $$ $a \ne 0$ $$, there are two solutions to $$ \(ax^2 + bx + c = 0\) $$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

And the proper way is:

<p>
When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and
they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$ This is really cool!
</p>
