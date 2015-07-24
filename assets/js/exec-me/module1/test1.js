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
    cEl = $('<canvas id="output-canvas-1"></canvas>');

    cEl.css({
      width: '80%',
      height: '200px',
      display: 'inline-block',
      'background-color': '#ffffff',
      margin: '2%'
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
