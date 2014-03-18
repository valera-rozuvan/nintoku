---
layout: post
title:  "Installing Emacs on Debian wheezy"
date:   2014-03-18 23:32:24
categories: installing emacs debian wheezy
---

Debian 7 code named [wheezy](https://www.debian.org/releases/wheezy) comes bundled
with [Emacs version 23](https://packages.debian.org/wheezy/emacs). I want to use
the latest and greatest Emacs 24 = ) So, without any other words, I present to you
the complete guide of how to install Emacs 24.3.1 on Debian 7 wheezy.

{% highlight bash %}
sudo aptitude install git-core libxaw7-dev libxpm-dev libpng12-dev libtiff5-dev libgif-dev libjpeg8-dev libgtk2.0-dev libncurses5-dev autoconf automake texinfo
sudo apt-get build-dep emacs
git clone git://git.savannah.gnu.org/emacs.git
cd emacs/
git checkout emacs-24.3
git checkout -b custom_branch
./autogen.sh
./configure --prefix=/opt/emacs24
make --jobs=2
sudo make install
{% endhighlight %}

The above steps will install Emacs to `/opt/emacs24`. To run Emacs, you can launch it by:

{% highlight bash %}
/opt/emacs24/bin/emacs
{% endhighlight %}

It is important to add the directory, where Emacs binary is found, to the system `PATH`
variable. The directory contains several other important Emacs related binaries

- ctags
- ebrowse
- emacs -> emacs-24.3
- emacs-24.3
- emacsclient
- etags
- grep-changelog

Place the following line at the bottom of your `~/.bashrc` file:

{% highlight bash %}
export PATH=$PATH:/opt/emacs24/bin
{% endhighlight %}

Now you can run Emacs with a simple command

{% highlight bash %}
emacs
{% endhighlight %}
