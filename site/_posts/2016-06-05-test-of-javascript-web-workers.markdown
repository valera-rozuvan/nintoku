---
layout: post
title:  "Test of JavaScript Web Workers"
date:   2016-06-05 03:21:05
categories: test javascript webworkers
tags:
- test
- javascript
- webworkers
---

An experiment with [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/).
The idea is to spawn as many Web Workers, as there are CPU cores on the current machine. Each worker
will be responsible for generating random **xy** coordinates, along with a random RGB color value.
The main thread will use these coordinates to draw on a
[HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

Click on the button **Run**, and see magic happen = )

<div class="exec-me" data-js-source="module2-test1">
  <a class="btn-run-js" href="#">Run</a>
</div>

The sources for this test:

- Main JS code [is here](https://github.com/valera-rozuvan/nintoku/blob/master/site/assets/js/exec-me/module2/test1.js).
- Worker JS code [is here](https://github.com/valera-rozuvan/nintoku/blob/master/site/assets/js/exec-me/module2/worker.js).

Please note, that for this post it was decided not to use [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
directly. Instead, to generate random values, [Ultra High Entropy Pseudo-Random Number Generator](https://www.grc.com/otg/uheprng.htm)
is used.

PS: On my machine (Intel Core i7), running in Google Chrome, it takes **2605.80s** to
reach 100% of filled pixels. How fast is your machine? **=)**
