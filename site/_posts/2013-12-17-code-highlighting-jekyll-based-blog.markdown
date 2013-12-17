---
layout: post
title:  "Code highlighting in a Jekyll-based blog"
date:   2013-12-17 18:08:25
categories: jekyll code highlighting blog
---

It turns out that Jekyll has access to a very powerful code highlighting system
[pygments](http://pygments.org/). There is a huge number of [lexers](http://pygments.org/docs/lexers/)
that define the rules for highlighting for many, many languages.

To use it, you surround your code block like so:

{% highlight c %}
{% raw %}
    {% highlight c %}

        ... code goes here ...

    {% endhighlight %}
{% endraw %}
{% endhighlight %}
