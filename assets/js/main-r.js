console.log('[DEBUG]: We are in "main-r.js" file.');

require.config({
  paths: {
    Modernizr: 'vendor/modernizr-2.6.2.custom.min'
  },
  shim: {
    Modernizr: {
      exports: 'Modernizr'
    }
  }
});

require(['Modernizr'], function (Modernizr) {
  console.log('[DEBUG]: We are in first require() callback function.');

  // For Example.
  if (Modernizr.canvas) {
    // Do something here.
    console.log('[DEBUG]: Modernizr.boxshadow is truthy.');
  } else {
    console.log('[DEBUG]: Modernizr.boxshadow is falsy.');
    console.log('---> Modernizr = ', Modernizr);
  }
});
