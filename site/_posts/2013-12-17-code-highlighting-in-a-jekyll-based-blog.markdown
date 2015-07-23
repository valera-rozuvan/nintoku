---
layout: post
title:  "Code highlighting in a Jekyll-based blog"
date:   2013-12-17 18:08:25
categories: jekyll code highlighting blog
---

It turns out that Jekyll has access to a very powerful code highlighting system
[pygments](http://pygments.org/). There is a huge number of [lexers](http://pygments.org/docs/lexers/)
that define the rules for highlighting for many, many languages.

To use it, you surround your code block like so

{% highlight c linenos=table %}
{% raw %}
    {% highlight lexer_name %}

        ... code goes here ...

    {% endhighlight %}
{% endraw %}
{% endhighlight %}

**lexer_name** is a short name for a programming language.

NOTE: To enable syntax highlighting, please set the *pygments* variable to
*true* in the `_config.yml` configuration file (see
[reference](http://jekyllrb.com/docs/templates/)).
