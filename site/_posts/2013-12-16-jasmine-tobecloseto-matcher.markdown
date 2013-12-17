---
layout: post
title:  "Jasmine toBeCloseTo() matcher"
date:   2013-12-16 17:50:56
categories: jasmine
---

Today I was faced with a problem of checking that a number was really close
to another number, but not necessarily equal to it.
[Jasmine](http://pivotal.github.com/jasmine/) has a really nifty
matcher [toBeCloseTo()](https://github.com/pivotal/jasmine/blob/master/src/core/matchers/toBeCloseTo.js)
just for this case. See the code below.

{% highlight js+genshi %}
getJasmineRequireObj().toBeCloseTo = function() {

    function toBeCloseTo() {
        return {
            compare: function(actual, expected, precision) {
                if (precision !== 0) {
                    precision = precision || 2;
                }

                return {
                    pass: Math.abs(expected - actual) < (Math.pow(10, -precision) / 2)
                };
            }
        };
    }

    return toBeCloseTo;
};
{% endhighlight %}
