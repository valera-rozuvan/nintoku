define('module1-test1', ['jQuery'], function ($) {
  var el, cEl;

  console.log('[DEBUG]: We are in define("module1-test1") function.');

  function init(_el) {
    console.log('[DEBUG]: We are in init() function.');

    el = _el;

    createCanvas();

    $(el).find('a.btn-run-js').click(function (event) {
      event.preventDefault();
      event.stopPropagation();

      run();
    });
  }

  function createCanvas() {
    cEl = $('<canvas>');

    cEl.css({
      width: '80%',
      height: '160px',
      display: 'inline-block'
    });

    $(el).append(cEl);
  }

  function run() {
    console.log('[DEBUG]: We are in run() function.');
  }

  return {
    init: init
  };
});
