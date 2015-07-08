---
layout: post
title:  "Scrobbling to Last.fm from Linux"
date:   2014-06-15 22:57:24
categories: scrobbling last fm linux
---

A brief note on Last.fm and scrobbling:

> music website, founded in the United Kingdom in 2002. Using a music
recommender system called "Audioscrobbler", Last.fm builds a detailed
profile of each user's musical taste by recording details of the tracks
the user listens to, either from Internet radio stations, or the user's
computer or many portable music devices. This information is transferred
("scrobbled") to Last.fm's database either via the music player itself
(Rdio, Spotify, Clementine, Amarok) or via a plugin installed into the
user's music player. The data are then displayed on the user's profile
page and compiled to create reference pages for individual artists.

(from [Wikipedia's article](http://en.wikipedia.org/wiki/Last.fm).)

So basically as I listen to music, Last.fm allows for other to see
what I am listening to, and also view the history of what I have listened
to in the past. Take a look at my
[statistics page](http://www.last.fm/user/valerarozuvan), and at
[what I am listening to now](http://www.last.fm/user/valerarozuvan/now). The
second page automatically refreshes the information as music tracks change!

So since I am a Linux guy, I have configured myself the following setup to
have my played music be scrobbled to Last.fm.

Introducing

1. **[Music Player Daemon (MPD)](http://mpd.wikia.com/wiki/Music_Player_Daemon_Wiki)**
is a flexible, powerful, server-side application for playing music.
2. **[Sonata](https://github.com/multani/sonata)** - an elegant music client for MPD.
3. **[mpdscribble](http://www.ohloh.net/p/mpdscribble)** is a music player daemon
client which submits information about tracks being played to audioscrobbler.

Below are the configuration files for **MPD** and **mpdscribble**. I am placing
them here for the curious soul, and for my own reference.

{% highlight text %}
$ cat ~/.mpd.d/mpd.conf
follow_outside_symlinks "no"
follow_inside_symlinks "no"
db_file "/home/valera/.mpd.d/db"
sticker_file "/home/valera/.mpd.d/sticker"
log_file "/home/valera/.mpd.d/log"
music_directory "/home/valera/Music"
playlist_directory "/home/valera/.mpd.d/playlists"
pid_file "/home/valera/.mpd.d/pid"
audio_output_format "44100:16:2"
samplerate_converter "0"
volume_normalization "yes"
audio_buffer_size "4096"
auto_update "yes"
audio_output {
    type "alsa"
    name "AlsaOut1"
}
{% endhighlight %}

{% highlight text %}
$ cat ~/.mpdscribble/mpdscribble.conf
url = http://post.audioscrobbler.com
username = valerarozuvan
password = your_password

pidfile = /home/valera/.mpdscribble/pid
{% endhighlight %}

Update your `init.d` script for **MPD** to point to your configuration file.
In my case I have a line in the file `/etc/init.d/mpd`:

{% highlight bash %}
MPDCONF=/home/valera/.mpd.d/mpd.conf
{% endhighlight %}

Also, update the configuration file `/etc/default/mpdscribble` for
**mpdscribble** so it has the following lines:

{% highlight bash %}
MPD_SYSTEMWIDE=1
DAEMON_OPTS="--conf /home/valera/.mpdscribble/mpdscribble.conf"
USER=valera
{% endhighlight %}

**PLEASE NOTE: In all of the above files, make sure to update the paths
of files so that they contain your Linux user name!**

Enjoy!
