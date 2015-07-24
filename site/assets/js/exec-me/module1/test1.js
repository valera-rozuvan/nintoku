(function (define, require, undefined) {
  'use strict';

  define('module1-test1', ['jQuery'], function ($) {
    var el, cEl, hasRun = false;

    function init(_el) {
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
      cEl = $('<canvas id="output-canvas-1" width="800" height="600"></canvas>');

      cEl.css({
        width: '98%',
        height: 'auto',
        display: 'inline-block',
        'background-color': '#ffffff',
        margin: '2%'
      });

      $(el).append(cEl);
    }

    function run() {
      var canvas, ctx;

      canvas = cEl.get(0);
      ctx = canvas.getContext('2d');

      ctx.fillStyle = 'black';
      ctx.fillRect(10, 10, 20, 20);
    }

    return {
      init: init
    };
  });
}(window.define, window.require));
