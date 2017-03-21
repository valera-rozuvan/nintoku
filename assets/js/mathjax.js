(function (define, require, undefined) {
  'use strict';

  define('mathjax', [], function () {
    function init() {
      var script = document.createElement('script');

      script.type = 'text/javascript';
      script.src  = 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
      document.getElementsByTagName('head')[0].appendChild(script);
    }

    return {
      init: init
    };
  });
}(window.define, window.require));
