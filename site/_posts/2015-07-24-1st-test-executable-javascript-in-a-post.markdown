---
layout: post
title:  "1st test: Executable JavaScript in a post"
date:   2015-07-24 02:00:17
categories: test javascript post
tags:
- test
- javascript
- post
---

I want to be able to interact with the user. I want my posts to contain
executable JavaScript. It would be perfect if some lengthy text explanation was
reinforced with a JavaScript sample demo right on the page. So that the user could
better understand what I am talking about.

I will introduce a mark-up element in my posts. It will contain a certain **class** and
a `data-*` attribute. The **class** will tell my executable JavaScript engine that it should
act up, and the `data-*` attribute will tell it how to act up. I.e. - I will be specifying
the necessary JavaScript file to load and execute via the `data-*` attribute.

So, here we go:

<div class="exec-me" data-js-source="module1-test1">
  <a class="btn-run-js" href="#">Run</a>
</div>

Click on the button **Run**, and see magic happen = )

The HTML code snippet to set up this executable JavaScript sample is as follows:

{% highlight html linenos=table %}
<div class="exec-me" data-js-source="module1-test1">
  <a class="btn-run-js" href="#">Run</a>
</div>
{% endhighlight %}

The actual executable JavaScript is:

{% highlight js linenos=table %}
(function (define, require, undefined) {
  'use strict';

  define('module1-test1', ['jQuery'], function ($) {
    var el, cEl, hasRun = false;

    function init(_el) {
      el = _el;

      createCanvas();

      $(el).find('a.btn-run-js').click(function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (hasRun === false) {
          hasRun = true;
          run();
        }
      });
    }

    function createCanvas() {
      cEl = $('<canvas id="output-canvas-1"></canvas>');

      cEl.css({
        width: '400px',
        height: '200px',
        display: 'inline-block',
        'background-color': '#ffffff',
        margin: '2%'
      });

      $(el).append(cEl);
    }

    function run() {
      var canvas, ctx;

      canvas = cEl.get(0);
      ctx = canvas.getContext('2d');

      ctx.fillStyle = 'black';
      ctx.fillRect(10, 10, 20, 20);
    }

    return {
      init: init
    };
  });
}(window.define, window.require));
{% endhighlight %}

Oh, I am going to have a fun time from now on = )
