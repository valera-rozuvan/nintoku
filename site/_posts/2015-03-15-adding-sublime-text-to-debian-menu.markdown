---
layout: post
title:  "Adding Sublime Text to Debian menu"
categories: sublime text debian menu
---

I am currently using Debian 7 Wheezy. When installing the system, I didn't
go with Gnome, and opted for a much simpler Blackbox window manager. Blackbox
out of the bocks integrates the Debian menu into it's context menu (right
click anywhere on the desktop to get the context drop-down). Most of the
applications you install using the dpkg system come pre-configured to add
friendly launch entries into the Debian menu. However, sometimes after you
install an application you find that you can only launch it from the terminal.
So is the case with Sublime Text 3 editor.

To add a menu launcher for Sublime, create a file:

    ~/.menu/subl

with the following contents:

    ?package(sublime-text):needs="X11" section="Applications/Editors" hints="Text editor"\
    longtitle="Sublime Text 3"\
    title="Sublime" command="/usr/bin/subl"

Then update the Debian menu with the following command:

    sudo update-menus -v --menufilesdir=~/.menu

