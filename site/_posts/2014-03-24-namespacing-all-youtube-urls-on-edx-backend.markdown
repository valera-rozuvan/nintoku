---
layout: post
title:  "Namespacing all YouTube URLs on edX backend"
date:   2014-03-24 19:20:27
categories: namespacing youtube url edx backend
---

Up to now, the backend defined 2 variables which stored YouTube related URLs:

{% highlight python %}
# URL to test YouTube availability
YOUTUBE_TEST_URL = 'https://gdata.youtube.com/feeds/api/videos/'
{% endhighlight %}

and

{% highlight python %}
# Current youtube api for requesting transcripts.
# for example: http://video.google.com/timedtext?lang=en&v=j_jEn79vS3g.
YOUTUBE_API = {
    'url': "http://video.google.com/timedtext",
    'params': {'lang': 'en', 'v': 'set_youtube_id_of_11_symbols_here'}
}
{% endhighlight %}

This was done in `[cms/envs/common.py](https://github.com/edx/edx-platform/blob/156b5312933ff5d6849e577bbd6bf80fd48de234/cms/envs/common.py)` file (lines 428, 532).

I wanted to introduce a new URL which is responsible for YouTube API on
the front-end. To do this, I have created a `YOUTUBE` namespace, and
added a third URL to the back-end:

{% highlight python %}
YOUTUBE = {
    # YouTube JavaScript API
    'API': 'www.youtube.com/iframe_api',

    # URL to test YouTube availability
    'TEST_URL': 'gdata.youtube.com/feeds/api/videos/',

    # Current youtube api for requesting transcripts.
    # For example: http://video.google.com/timedtext?lang=en&v=j_jEn79vS3g.
    'TEXT_API': {
        'url': 'video.google.com/timedtext',
        'params': {
            'lang': 'en',
            'v': 'set_youtube_id_of_11_symbols_here',
        },
    },
}
{% endhighlight %}

The [pull request](https://github.com/edx/edx-platform/commit/1c8eed853ebc2788b187c231cd90ddaf05d5dbb9) has just been merged in to [edx-platform master](https://github.com/edx/edx-platform).

This PR opens up a possibility to mock the YouTube API in acceptance tests.
