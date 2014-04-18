---
layout: post
title:  "UPDATE: The New Age of JavaScript: Concurrency"
date:   2014-04-18 09:27:27
categories: update
---

In a previous article entitled
[The New Age of JavaScript: Concurrency](http://valera-rozuvan.github.io/nintoku/new/age/javascript/concurrency/the-new-age-of-javascript-concurrency)
I went on to describe how I have discovered concurrency in JavaScript
that executed in Firefox.

The discovery turned out to be a fluke.

[The JSFiddle](http://jsfiddle.net/k2h7Z/34) that demonstrated the so
called concurrency contains an error. When you enabled the
second heavy function by setting `enableHeavyFunction` to `true`, then,
because of the heavy function's random nature, in some cases half way
through execution an error is raised

    Error: invalid arguments

    this.spectrum   = new Float32Array(bufferSize/2);

`bufferSize` is to big, and Firefox JavaScript engine throws an error.
Because of this, the fact that the heavy function ran is not registered
in the output. So it appears that for three or four small functions only
one heavy function is run. This is not so. Both functions run one after
the other. It is just that the heavy function sometimes errors, and no
output for it is written.

In Chrome this behavior did not happen because either it allows arbitrary
first argument to `Float32Array` function, or it sets the first argument
to some predefined maximum value.

In any case, I have updated [the JSFiddle](http://jsfiddle.net/k2h7Z/37)
to use a blocking function instead of the really large function. As can
be seen, it clearly shows that JavaScript is single-threaded across all
browsers.
