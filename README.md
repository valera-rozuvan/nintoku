nintoku
=======

The 16th emperor of Japan.

No, seriously.
--------------

A place to procrastinate while at work.

The original idea: this repo will be a central point for all my non-work
activities that I do at work.

Format?
-------

A blog.

So, without further ado, please redirect your browser to
http://valera-rozuvan.github.io/nintoku/

Installing Jekyll and updating the blog
---------------------------------------

I am using Debian GNU/Linux 7 (wheezy). Most likely these instructions will
work on any Debian based Linux distribution. You must have Ruby available
on your system along with Ruby development dependencies. If you don't, then:

    # sudo aptitude install ruby1.9.1 ruby1.9.1-dev ruby1.9.1-examples ruby1.9.1-full

You also must have Node JS available on your system. If you don't, then:

    # sudo aptitude install curl
    # sudo curl -sL https://deb.nodesource.com/setup | sudo bash -
    # sudo aptitude install nodejs

One final bit before installing Jekyll, make sure you have the `build-essential`
Debian package installed:

    # sudo aptitude install build-essential

Now we can proceed with installation of the Jekyll Ruby gem:

    # sudo gem install jekyll

Check that the installation went smotthly:

    $ jekyll --version

You should get `jekyll 2.5.3` (or a newer version).

Before I continue, I want to point out that I use GitHub to host the source
of my blog, and ALSO to host the live version of the latest build of my blog.

I have this blog setup so that the branch `master` contains the sources of
the blog, and the branch `gh-pages` contains the latest version of the built
blog. The blog is hosted on GitHub pages. The branch `gh-pages` is directly
sourced by the GitHub pages system, and so if you update the branch `gh-pages`
you are directly updating the live bog. Do note that the changes can take some
time to appear on the live blog. This is due to the fact that GitHub pages is
a very busy system, and takes care of hundred of thousands of pages. Be
patient, it sometimes takes up to 5 minutes for your changes to be made live.

I find that the best workflow for working on your blog is as follows.

1. Clone the GitHub blog repository into 2 different folders on your PC.
2. In one folder checkout the `master` branch.
3. In the other folder checkout the `gh-pages` branch.
4. Edit with your editor of choice the "master" folder.
5. Build your updated blog with the command

    $ jekyll build --source PATH_TO_MASTER_FOLDER --destination PATH_TO_GH_PAGES_FOLDER

6. Then push both folders to GitHub to preserve your source changes and
also to publish live your new changes.

Hope I didn't forget anything. For other details on how to configure your
Jekyll blog, or how to do anything more specific, please refer to the
[Jekyll documentation](http://jekyllrb.com/docs/home/).

Copyright
---------

nintoku is an open source project by
[Valera Rozuvan](http://valera.rozuvan.net/).

License
-------

See [LICENSE](https://github.com/valera-rozuvan/nintoku/blob/master/LICENSE).

GNU GENERAL PUBLIC LICENSE Version 2, June 1991
