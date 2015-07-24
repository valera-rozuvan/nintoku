(function (define, require, undefined) {
  'use strict';

  require.config({
    paths: {
      Modernizr: 'vendor/modernizr-2.8.3.custom.min',
      jQuery: 'vendor/jquery-1.9.1.min',
      scripts: 'scripts.min',
      'module1-test1': 'exec-me/module1/test1'
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

  require(['Modernizr', 'jQuery', 'scripts'], function (Modernizr, $) {
    $(document).ready(function () {
      $('.exec-me').each(function (index, el) {
        var jsSource = $(el).data('js-source');

        require([jsSource], function (module) {
          module.init(el);
        });
      });
    });
  });
}(window.define, window.require));
