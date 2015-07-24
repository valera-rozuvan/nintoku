define('module1-test1', ['jQuery'], function ($) {
  var el, cEl, hasRun = false;

  console.log('[DEBUG]: We are in define("module1-test1") function.');

  function init(_el) {
    console.log('[DEBUG]: We are in init() function.');

    el = _el;

    createCanvas();

    $(el).find('a.btn-run-js').click(function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (hasRun === false) {
        hasRun = true;
        run();
      }
    });
  }

  function createCanvas() {
    cEl = $('<canvas id="output-canvas-1"></canvas>');

    cEl.css({
      width: '400px',
      height: '200px',
      display: 'inline-block',
      'background-color': '#ffffff',
      margin: '2%'
    });

    $(el).append(cEl);
  }

  function run() {
    var canvas, ctx;

    console.log('[DEBUG]: We are in run() function.');

    canvas = cEl.get(0);
    ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.fillRect(10, 10, 20, 20);
  }

  return {
    init: init
  };
});
