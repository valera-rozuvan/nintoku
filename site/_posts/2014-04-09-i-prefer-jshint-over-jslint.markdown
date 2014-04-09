---
layout: post
title:  "I prefer JSHint over JSLint"
date:   2014-04-09 10:41:41
categories: preference jshint jslint
---

When it comes to [linting](http://en.wikipedia.org/wiki/Lint_%28software%29)
in JavaScript, there exist two mainstream solutions.

1. [JSLint](http://www.jslint.com) written by
[Douglas Crockford](http://www.crockford.com).
2. [JSHint](http://www.jshint.com) a fork of JSLint by the JavaScript community
that is more flexible.

I have worked with JSlint for some time now. I grew frustrated with it because
it is to rigid in the way it checks and enforces errors. There are numerous
discussion happening on the Internet about what is `right` JavaScript and
what is `wrong` JavaScript. Frankly though, I believe that when it comes down
to introducing changes to a JavaScript file, you should only care for:

- Adding/updating code so that it does not raise errors in the browser.

For example, a stray `{` bracket left in the code by an unfortunate typo,
a forgotten global variable that really should be contained within the scope
of a function, etc.

- Writing code that will not be misinterpreted by less experienced developers.

JavaScript is a very flexible language. Before the introduction of the
`'use strict';` feature in
[ECMAScript 5's](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
strict mode, the web was a wild jungle. Developers could write crazy code
that worked, but was very hard to maintain and to read.

- Writing optimal code.

If a change in a JavaScript file does not introduce a new feature or
some kind of performance improvement, then it is strictly a stylistic change.
Such things are very personal and are project dependent. A linter should
not really care about such things as style, indentations, etc. It is up to
the developer to maintain a common approach to style within a single JavaScript
source file.

Because of the above arguments, I have switched over to JSHint.

For using with [Emacs](http://www.gnu.org/software/emacs) you can get the
excellent [jshint-mode](https://github.com/daleharvey/jshint-mode) by
[Dale Harvey](https://twitter.com/daleharvey). I **strongly suggest** that
you update the `jslint.js` file that comes with this mode to the latest
version. The latest version can be found at the
[download and install](http://www.jshint.com/install) section of the JSHint
site.

Checkout my [Emacs config](https://github.com/valera-rozuvan/emacs_config) file
for reference, if in doubt of how to install `jshint-mode`.
