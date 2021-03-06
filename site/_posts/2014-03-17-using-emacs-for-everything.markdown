---
layout: post
title:  "Using Emacs for everything"
date:   2014-03-17 18:54:59
categories: emacs everything
---

When you are working with some console application such as [git](http://git-scm.com), it is often
the case that a text editor is launched by the console application for you to edit some text. By
default in Debian you get [nano](http://www.nano-editor.org), which is an OK editor. However,
what if you wanted to use Emacs for all text editing?

Luckily, the Debian provides a really easy way to specify alternatives to just about any application.
Try running

{% highlight bash linenos=table %}
sudo update-alternatives --config editor
{% endhighlight %}

You will get a list of all available choices, and a prompt to set the default editor. We will create
our own little [Bash script](http://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) that will launch
Emacs for us whenever the text editor is invoked. We will update the alternatives to set the default
editor to point to our script.

For easy manipulation of the Debian alternatives I suggest the use of
[galternatives](https://packages.debian.org/wheezy/galternatives). Running this tool, you can select
the `editor` from the alternatives panel. Then you can add a new alternative pointing to
`/home/user_name/bin/editor`, and make sure it is selected.

Next create a new file `/home/user_name/bin/editor`, make sure that it is executable, and add the
following contents to it:

{% highlight bash linenos=table %}
#!/bin/bash

num_emacs_servers=`ps aux | grep -i "[e]macs24-x" | wc -l`

if [[ "$num_emacs_servers" -eq "1" ]]
then
    # Starting emacsclient
    echo "Starting emacsclient"
    exec /usr/bin/emacsclient $@
else
    # Starting emacs server
    echo "Starting emacs24-x"
    echo "num_emacs_servers = ${num_emacs_servers}"
    exec /usr/bin/emacs24-x $@
fi

exit 0
{% endhighlight %}

Also, update the alternatives for `emacs`, setting it to `/home/user_name/bin/editor`.

Now, whenever you run emacs, or some other command runs the text editor, you will:

- Get a new Emacs started, if no Emacs is running.
- Get a new frame withing an already running Emacs.

You must make sure that upon start, Emacs runs the following LISP command:

{% highlight lisp linenos=table %}
(server-start)
{% endhighlight %}

This will start an Emacs server daemon that will process any client requests.
