---
layout: post
title:  "How to setup and configure Raspberry Pi 2"
date:   2016-01-02 18:40:07
categories: howto raspberry pi
tags:
- howto
- raspberry pi
---


Introduction
------------

Recently I got a chance to work with a [Raspberry Pi](https://www.raspberrypi.org/). The long term goal is to write an
application for the Pi that will perform some video processing on a real-time video feed. But that's for another post.
Right now I want to sketch out the basic things that I did to get the Raspberry Pi up to speed.


The plan
--------

OK. So first thing first. We need to get our
[Raspberry Pi 2 Model B](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/) (hardware revision code: a21041)
up and running. This means:

1. Install a [flavor](http://distrowatch.com/) of [Linux](https://en.wikipedia.org/wiki/Linux) on to our RPi2 (here,
and onward, "RPi2" will mean "Raspberry Pi 2 Model B").
2. Boot it up, get some feedback from it (mouse, keyboard, display).
3. Get it connected to the Internet (via LAN or WAN).
4. Preform bare-minimum administrative tasks.
5. Configure it for [SSH](https://en.wikipedia.org/wiki/Secure_Shell) and
[VNC](https://en.wikipedia.org/wiki/Virtual_Network_Computing) access.


OS installation
---------------

Luckily for us, there exists a specifically crafted distribution of Linux for the RPi2. It's
[Raspbian](https://www.raspbian.org/), a free operating system based on Debian optimized for the Raspberry Pi hardware.
I found that the easiest path to get this OS onto the RPi2, is to get a prepared image from the Raspberry Pi Foundation.
They are located here: [Download Raspbian for Raspberry Pi](https://www.raspberrypi.org/downloads/raspbian/).

I got myself RASPBIAN JESSIE, Release date: 2015-11-21 (SHA-1: ce1654f4b0492b3bcc93b233f431539b3df2f813). The exact file
is [2015-11-21-raspbian-jessie.zip](https://downloads.raspberrypi.org/raspbian/images/raspbian-2015-11-24/2015-11-21-raspbian-jessie.zip).
The zip archive contains an image file. The image file needs to be put onto a MicroSD card. I suggest that a class 10
64GB MicroSD card is used for this task. The actual process of writing the image is handled by
[Win32DiskImager utility](http://sourceforge.net/projects/win32diskimager/) (in the case of Microsoft Windows). You can
read up on a more detailed process of how to install operating system images onto the RPi2 over at the official
documentation page [Installing Operating System Images - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/installation/installing-images/README.md).


First boot & first test of RPi2
-------------------------------

Connect all of your peripherals to the RPi2, insert the MicroSD card, and finally turn on the power! The first time I
did this, it was quite an exciting moment = )

<figure>
    <a href="{{ site.url }}/images/2016_01_02/raspberry_pi_2_model_b_2048.jpg"><img src="{{ site.url }}/images/2016_01_02/raspberry_pi_2_model_b_1024.jpg"></a>
    <figcaption>My Raspberry Pi 2 Model B setup</figcaption>
</figure>

My hardware setup involves the following components:

- RPi2
- small PC fan + small CPU radiator
- HDMI display
- USB Hub with external power
- mouse
- keyboard
- USB WiFi dongle

I want to point out two important things about RPi2.

First, it comes with no cooling whatsoever! This means that If you
are doing anything very CPU expensive for a long period of time, the CPU (among other things) can become very hot. I
have observed temperature reading up to 60° Celsius. Buying a small radiator and a small PC fan to cool the CPU of the
RPi2 is absolutely a must! I have tested my setup doing various resource intensive things (large software project
compilation, ray tracing, video processing), and so far the temperature reading didn't raise above 34° Celsius.

Second, consider the USB ports. Even though the RPi2 does have 4 USB ports, don't expect it to be able to power 4
power-hungry devices! It just can't provide that much current for the above-average needs. The way out of this problem
is to buy a USB Hub with external power. Make sure that you buy a hub that doesn't feed back power to the RPi2!


The Internet connection
-----------------------

The RPi2 has an Ethernet port. So, you could plug it in directly to your router, or a switch. However, I decided to get
a USB WiFi dongle for my RPi2. It will be a great asset if you need to have the RPi2 working on a device that is in
motion (for example an autonomous robot).

So, after you plugin the RPi2, and it boots up into a desktop environment, play around with it. Make sure that you are
able to access the Internet (open up a browser, and navigate to http://google.com/ ).


Bare-minimum administrative tasks
--------------------------------

There are several things one needs to do after first boot of RPi2.

1. Change the default password of the `pi` user. You can do that using the `passwd` command.

2. Enlarge the amount of available memory on the MicroSD card. When you initially put the Raspbian image onto your
MicroSD card, the image only takes about 3GB of space. Also, the MicroSD card's partition table is set to this size
(3GB). Therefore, the OS will only see the 3GB of space available - even if your card is 64GB in size! To fix this,
use the available command `sudo raspi-config`.

3. Next you need to update the RPi2 firmware. Use the available command `sudo rpi-update`. NOTE: you need an active
Internet connection for the update to be successful!

4. Update the package manager's package database with the latest available package information. Use the command
`sudo aptitude update`.

5. Upgrade software packages to their latest version (retrieved in the last step). Use the command `sudo aptitude
upgrade`.


SSH and VNC access
------------------

The first part is easy! If you have your RPi2 on a LAN, and another PC on the same LAN as the RPi2, then you can easily
SSH to the RPi2 from your other computer. All you need is to find out the IP address of the RPi2. One way to get the IP
is to run the command `sudo ifconfig` on the RPi2, and see the output. The IP address will either be found in the `eth0`
section, or the `wlan0` section (depending on whether you connected the RPi2 via an Ethernet cable or via a USB WiFi
dongle). Now, just open up a console on your other PC, and type `ssh pi@192.168.1.203` (in my case, "192.168.1.203" is
the IP of my RPi2). If you are on a Windows machine, you can use [WinSCP](https://winscp.net/) and
[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) to get access of the RPi2 through SSH.

Now on to VNC. In order to access RPi2 via VNC, you need to install a VNC server on the RPi2. One option is to use
`tightvncserver`. First, install it with the command `sudo aptitude install tightvncserver`. Then configure the password
for the server with the command `tightvncserver`. Now you can start up the server with
`vncserver :0 -geometry 800x600 -depth 24`. NOTE: you can configure any resolution that you desire, not just `800x600`.
If everything went right, you can try connecting via VNC from another machine. On Windows you can use
[TightVNC client](http://www.tightvnc.com/). On Linux there are many options. I use `gvncviewer`. To connect to an RPi2
machine, use the command `gvncviewer 192.168.1.203:0` (replace "192.168.1.203" with the IP address of your RPi2).


Conclusion
----------

I wrote this post mainly for myself. It took me about 2 days to figure out all of this. I hope that at least in part
it will be of any use to you, my gentle readers = )
