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
