---
layout: post
title:  "The New Age of JavaScript: Concurrency"
date:   2014-04-02 03:43:14
categories: new age javascript concurrency
---

**UPDATE**
This post is based on an error. [See why.]({{ site.url }}/updates/javascript/concurrency/new-age/update-the-new-age-of-javascript-concurrency)
**End-of: UPDATE**

It has long been known to me that the
[JavaScript language](http://en.wikipedia.org/wiki/JavaScript)
(the browser variety) is single-threaded. I.e. at any one time there is
a single thread running JavaScript code. This means that at one time
only one function can be running. A more detailed explanation of this
fact is discussed by [John Resig](http://ejohn.org/about) in his
[How JavaScript Timers Work](http://ejohn.org/blog/how-javascript-timers-work)
post.

A natural question arises. If you use the
[window.setInterval](https://developer.mozilla.org/en/docs/Web/API/window.setInterval)
method to get two functions to execute periodically at the same interval,
will they always (and for all time, while the browser is open) execute
one after the other, in the order of `window.setInterval` invocation?

So, to be more precise, if we have the following code:

{% highlight javascript linenos=table %}
var timeout1 = window.setInterval(timeoutFunc1, 50),
    timeout2 = window.setInterval(timeoutFunc2, 50);

function timeoutFunc1() {
    // It is given that window.output() is defined, and writes
    // it's parameter to the page for the user to see.
    window.output('1');
}

function timeoutFunc2() {
    window.output('2');
}
{% endhighlight %}

will we see on the page:

{% highlight text linenos=table %}
1
2
1
2
1
2
1
2
1
2
1
2
...
{% endhighlight %}

An interesting question. To further complicate things, what if one of
the periodically invoked functions did something else besides outputting
a number to the page. What if it took a long time to run, i.e. it would
execute 5 to 10 times longer? Would we then see something like this:

{% highlight text linenos=table %}
2
2
2
2
1
2
2
2
1
2
2
2
...
{% endhighlight %}

I have done a lot of reading on the subject of JavaScript concurrency,
parallelism, etc. I have started to believe that in the second example
above the two functions would still execute one after the other.

Then, today, I decided to write such a test, and see for myself what
would actually happen. I have created a JSFiddle to
[test this out](http://jsfiddle.net/k2h7Z/34).
The results were quite surprising for me.

I have tested in Internet Explorer, Opera, Google Chrome, and Firefox.
In all browsers except Firefox the two function ran one after the other.
In Firefox, though, the more CPU expensive function was running in parallel
with the fast function. I drew this conclusion for the fact that the slow
function managed to output once in the same time that the fast function
outputted several times.

> In Firefox, though, the more CPU expensive function was running in parallel
with the fast function.

I have used the following versions of the browsers:

- Internet Explorer 10.0.9200.16576
- Opera 20.0.1387.82
- Google Chrome 33.0.1750.154
- Firefox 28.0

Tested on an Intel x86 quad core machine running Windows 7.

Here are the screenshots of the results.

<figure>
    <a href="{{ site.url }}/images/2014_04_02/internet_explorer.png"><img src="{{ site.url }}/images/2014_04_02/internet_explorer.png"></a>
    <figcaption><a href="{{ site.url }}/images/2014_04_02/internet_explorer.png" title="Internet Explorer">Internet Explorer</a>.</figcaption>
</figure>
<figure>
    <a href="{{ site.url }}/images/2014_04_02/opera.png"><img src="{{ site.url }}/images/2014_04_02/opera.png"></a>
    <figcaption><a href="{{ site.url }}/images/2014_04_02/opera.png" title="Opera">Opera</a>.</figcaption>
</figure>
<figure>
    <a href="{{ site.url }}/images/2014_04_02/google_chrome.png"><img src="{{ site.url }}/images/2014_04_02/google_chrome.png"></a>
    <figcaption><a href="{{ site.url }}/images/2014_04_02/google_chrome.png" title="Google Chrome">Google Chrome</a>.</figcaption>
</figure>
<figure>
    <a href="{{ site.url }}/images/2014_04_02/firefox.png"><img src="{{ site.url }}/images/2014_04_02/firefox.png"></a>
    <figcaption><a href="{{ site.url }}/images/2014_04_02/firefox.png" title="Firefox">Firefox</a>.</figcaption>
</figure>
