---
layout: post
title:  "jQuery broken promises illustrated"
date:   2015-07-08 20:36:01
categories: jQuery promises
---

jQuery
------

[jQuery](https://jquery.com/) is a famous JavaScript library that just about every web programmer has heard of, and almost all have used it at least once in their web programming career.

jQuery has support for promises. It has nice documentation on them: see [.promise()](https://api.jquery.com/promise/), [deferred.promise()](https://api.jquery.com/deferred.promise/), and [Deferred Object](https://api.jquery.com/category/deferred-object/).

Promises
--------

A [promise](https://en.wikipedia.org/wiki/Futures_and_promises) is a way to reduce this

{% highlight js linenos=table %}
asyncCall(function(err, data1){
    if(err) return callback(err);
    anotherAsyncCall(function(err2, data2){
        if(err2) return calllback(err2);
        oneMoreAsyncCall(function(err3, data3){
            if(err3) return callback(err3);
            // are we done yet?
        });
    });
});
{% endhighlight %}

to this

{% highlight js linenos=table %}
asyncCall()
.then(function(data1){
    // do something...
    return anotherAsyncCall();
})
.then(function(data2){
    // do something...
    return oneMoreAsyncCall();
})
.then(function(data3){
   // the third and final async response
})
.fail(function(err) {
   // handle any error resulting from any of the above calls
})
.done();
{% endhighlight %}

The above two JavaScript excerpts have been taken from [Promises – an alternative way to approach asynchronous JavaScript](http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/).

Several promise specification for JavaScript exist, *Promises/A+* being the most widely used.

1. Promises/A [http://wiki.commonjs.org/wiki/Promises/A](http://wiki.commonjs.org/wiki/Promises/A)
2. Promises/A+ [https://promisesaplus.com/](https://promisesaplus.com/)
3. ES6 Promise Objects [http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects)

The problem with jQuery's promises
----------------------------------

jQuery's promise implementation is pretty broken. It does not adheer to the Promises/A+ specification used by the vast majority of other promise implementations. See the [list of Promises/A+ implementations](https://promisesaplus.com/implementations).

An illustration
---------------

Using the latest of either jQuery 1.x or 2.x, let's write the following JavaScript test program:

{% highlight js linenos=table %}
var $, output, def, promise, myObject, syncWorkFunc, asyncWorkFunc;

setup();
promiseTests();

function setup() {
    $ = jQuery;
    output = document.getElementById('output');

    def = $.Deferred();
    promise = def.promise();

    myObject = {
        state: null
    };

    syncWorkFunc = function () {
        def.resolve();
    };
    asyncWorkFunc = function () {
        window.setTimeout(function () {
            def.resolve();
        }, 2000);
    };
}

function promiseTests() {
    $(output).append('0.) myObject.state = ' + myObject.state + '<br />');

    syncWorkFunc();
    // asyncWorkFunc();

    promise.then(function () {
        $(output).append('[THEN #1] Setting myObject.state to "X".<br />');
        myObject.state = "X";
    });
    $(output).append('1.) Setting myObject.state to "A".<br />');
    myObject.state = "A";

    // syncWorkFunc();
    // asyncWorkFunc();

    $(output).append('2.) myObject.state = ' + myObject.state + '<br />');
    promise.then(function () {
        $(output).append('[THEN #2] myObject.state = ' + myObject.state + '<br />');
    });
    promise.then(function () {
        $(output).append('[THEN #3] myObject.state = ' + myObject.state + '<br />');
    });
    promise.then(function () {
        $(output).append('[THEN #4] myObject.state = ' + myObject.state + '<br />');
    });
    $(output).append('3.)<br />');
}
{% endhighlight %}

The output of the above JavaScript program will be:

{% highlight text %}
0.) myObject.state = null
[THEN #1] Setting myObject.state to "X".
1.) Setting myObject.state to "A".
2.) myObject.state = A
[THEN #2] myObject.state = A
[THEN #3] myObject.state = A
[THEN #4] myObject.state = A
3.)
{% endhighlight %}

Two things went wrong here. All of <code>THEN {#}</code> logs should be at the end of the output. Also, and this is most important of all, in the end <code>myObject.state</code> did not change to <code>"X"</code>!

If we use a real Promise/A+ implementation, we will get:

{% highlight text %}
0.) myObject.state = null
1.) Setting myObject.state to "A".
2.) myObject.state = A
3.)
[THEN #1] Setting myObject.state to "X".
[THEN #2] myObject.state = X
[THEN #3] myObject.state = X
[THEN #4] myObject.state = X
{% endhighlight %}

You can see these results for yourself. A JS Fiddle has been setup with jQuery 2.1.4 [here](https://jsfiddle.net/4988rggu/4/). For valid Promise/A+ implementation I chose Angular JS. It's promise system [$q](https://docs.angularjs.org/api/ng/service/$q) is based on [Kris Kowal's Q](https://github.com/kriskowal/q). A JS Fiddle has been setup with Angular JS 1.4.2 [here](https://jsfiddle.net/xfmetfoL/4/).

When will promises be fixed in jQuery?
--------------------------------------

When jQuery 3.0 comes out. Refer to the blog post [jQuery 3.0: The Next Generations](http://blog.jquery.com/2014/10/29/jquery-3-0-the-next-generations/), and also [jQuery's work on getting their promises to pass the Promises/A+ test suite](https://github.com/jquery/jquery/pull/1996).

Useful links
------------

The problem discussed in this post is a well known one. It has been discussed previously by other people on the Internet. Be sure to go over all of the following resources:

1. [You're Missing the Point of Promises](https://gist.github.com/domenic/3889970)
2. [working with jQuery promises](http://stackoverflow.com/questions/17617545/working-with-jquery-promises)
3. [JAVASCRIPT PROMISES AND WHY JQUERY IMPLEMENTATION IS BROKEN](https://thewayofcode.wordpress.com/2013/01/22/javascript-promises-and-why-jquery-implementation-is-broken/)
4. [The Differences between jQuery Deferreds and the Promises/A+ spec](http://abdulapopoola.com/2014/12/12/the-differences-between-jquery-deferreds-and-the-promisesa-spec/)
5. [Problems inherent to jQuery $.Deferred](http://stackoverflow.com/questions/23744612/problems-inherent-to-jquery-deferred)
6. [Coming from jQuery](https://github.com/kriskowal/q/wiki/Coming-from-jQuery)
7. [Deferred: Backwards-compatible standards interoperability](https://github.com/jquery/jquery/pull/1996)
