(function (define, require, undefined) {
  'use strict';

  require.config({
    paths: {
      Modernizr: 'vendor/modernizr-2.8.3.custom.min',
      jQuery: 'vendor/jquery-1.11.3.min',
      Q: 'vendor/q-1.4.1.min',
      scripts: 'scripts.min',
      'google-analytics': 'google-analytics',
      mathjax: 'mathjax',
      'module1-test1': 'exec-me/module1/test1',
      'module2-test1': 'exec-me/module2/test1'
    },
    shim: {
      Modernizr: {
        exports: 'Modernizr'
      },
      scripts: {
        exports: '_main_loaded_',
        deps: [
          'jQuery', 'Modernizr'
        ]
      },
      jQuery: {
        exports: 'jQuery'
      }
    }
  });

  require(['Modernizr', 'jQuery', 'Q'], function (Modernizr, $, Q) {
    $(document).ready(function () {
      require(['scripts'], onScriptsLoaded);
    });

    function onScriptsLoaded() {
      require(['google-analytics'], onGoogleAnalyticsLoaded);
      require(['mathjax'], onMathjaxLoaded);

      $('.exec-me').each(function (index, el) {
        var jsSource = $(el).data('js-source');

        require([jsSource], function (module) {
          module.init(el);
        });
      });
    }

    function onGoogleAnalyticsLoaded(module) {
      module.init();
    }

    function onMathjaxLoaded(module) {
      module.init();
    }
  });
}(window.define, window.require));
