(function (define, require, undefined) {
  'use strict';

  define('google-analytics', [], function () {
    function init() {
      var _gaq = _gaq || [];

      _gaq.push(['_setAccount', 'UA-49332155-1']);
      _gaq.push(['_trackPageview']);

      (function () {
        var ga, s;

        ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

        s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
      }());
    }

    return {
      init: init
    };
  });
}(window.define, window.require));
