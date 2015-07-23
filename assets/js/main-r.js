console.log('[DEBUG]: We are in "main-r.js" file.');

require.config({
  paths: {
    Modernizr: 'vendor/modernizr-2.8.3.custom.min',
    jQuery: 'vendor/jquery-1.9.1.min',
    scripts: 'scripts.min'
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
  console.log('[DEBUG]: We are in first require() callback function.');

  $(document).ready(function () {
    console.log('[DEBUG]: We are in $(document).ready() callback function.');

    // For Example.
    if (Modernizr.canvas) {
      // Do something here.
      console.log('[DEBUG]: Modernizr.canvas is truthy.');
    } else {
      console.log('[DEBUG]: Modernizr.canvas is falsy.');
      console.log('---> Modernizr = ', Modernizr);
    }

    console.log('');

    $('.exec-me').each(function (index, el) {
      console.log('[DEBUG]: Found an "exec-me" element.');
      console.log('---> data["js-source"] = "' + $(el).data('js-source') + '".');
    });
  });
});
