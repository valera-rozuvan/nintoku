define('module1-test1', ['jQuery'], function ($) {
  var el;

  console.log('[DEBUG]: We are in define("module1-test1") function.');

  function init(_el) {
    console.log('[DEBUG]: We are in init() function.');

    el = _el;

    $(el).find('a.btn-run-js').click(function (event) {
      event.preventDefault();
      event.stopPropagation();

      run();
    });
  }

  function run() {
    console.log('[DEBUG]: We are in run() function.');
  }

  return {
    init: init
  };
});
