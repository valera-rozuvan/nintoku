(function (define, require, undefined) {
    'use strict';

    define('module2-test1', ['jQuery', 'Q'], function ($, Q) {
        var el, cEl, canvas, ctx, imgData,
            hasRun = false,
            wWorkers = [],
            dateLastDraw = 0,
            canvasUpdateInProgress = false,
            numWWorkers,
            resolveDefStopAllWorkers = null,
            resolveDefStartAllWorkers = null;

        function init(_el) {
            el = _el;

            if (window.Worker) {
                numWWorkers = window.navigator.hardwareConcurrency;

                createCanvas();

                $(el).find('a.btn-run-js').click(function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    if (hasRun === false) {
                        hasRun = true;
                        run();
                    }
                });
            } else {
                $(el).find('a.btn-run-js').hide();

                showError([
                    'Error!',
                    'Web Workers are not available!',
                    'Please use a modern browser, such as Google Chrome.'
                ]);
            }
        }

        function showError(errMsg) {
            cEl = $('<div />');

            errMsg.forEach(function (item, idx, arr) {
                cEl.append(item + '<br />');
            });

            $(el).append(cEl);
        }

        function createCanvas() {
            cEl = $('<canvas id="output-canvas-1" width="800" height="400"></canvas>');

            cEl.css({
                width: '96%',
                height: 'auto',
                display: 'inline-block',
                'background-color': '#ffffff',
                margin: '2%'
            });

            $(el).append(cEl);
        }

        function run() {
            var c1, dateNow;

            canvas = cEl.get(0);
            ctx = canvas.getContext('2d');
            imgData = ctx.createImageData(800, 400);

            if (!Date.now) {
                Date.now = function now() {
                    return new Date().getTime();
                };
            }

            for (c1 = 0; c1 < numWWorkers; c1 += 1) {
                wWorkers.push(new Worker('/nintoku/assets/js/exec-me/module2/worker.js'));

                dateNow = Date.now();

                wWorkers[c1].onmessage = processWorkerMessage;
                wWorkers[c1].postMessage([
                    'worker_id',
                    c1
                ]);
                wWorkers[c1].postMessage([
                    'seed',
                    ((1.0 + Math.random() * dateNow) / (1.0 + dateNow)) * (100.0 + Math.random() * 1000.0)
                ]);
            }

            dateLastDraw = Date.now();
        }

        function putPixel(x, y, r, g, b) {
            var pixelIndex, dateNow;

            if (canvasUpdateInProgress === true) {
                return;
            }

            pixelIndex = 4 * (x + y * 800);
            dateNow = Date.now();

            imgData.data[pixelIndex    ] =   r;  // red   color
            imgData.data[pixelIndex + 1] =   g;  // green color
            imgData.data[pixelIndex + 2] =   b;  // blue  color
            imgData.data[pixelIndex + 3] = 255;  // alfa

            if (dateNow - dateLastDraw >= 250) {
                canvasUpdateInProgress = true;

                stopAllWorkers().then(function () {
                    ctx.putImageData(imgData, 0, 0);

                    startAllWorkers().then(function () {
                        dateLastDraw = dateNow;
                        canvasUpdateInProgress = false;
                    });
                });
            }
        }

        function startAllWorkers() {
            var deferred = Q.defer(),
                workersStarted = [];

            wWorkers.forEach(function (item, idx, arr) {
                workersStarted.push({
                    started: false
                });
            });

            resolveDefStartAllWorkers = function (workerId) {
                var numItems = workersStarted.length,
                    numStartedItems = 0;

                workersStarted[workerId].started = true;

                workersStarted.forEach(function (item, idx, arr) {
                    if (item.started === true) {
                        numStartedItems += 1;
                    }
                });

                if (numItems === numStartedItems) {
                    deferred.resolve();
                }
            };

            wWorkers.forEach(function (item, idx, arr) {
                item.postMessage([
                    'start'
                ]);
            });

            return deferred.promise;
        }

        function stopAllWorkers() {
            var deferred = Q.defer(),
                workersStopped = [];

            wWorkers.forEach(function (item, idx, arr) {
                workersStopped.push({
                    stopped: false
                });
            });

            resolveDefStopAllWorkers = function (workerId) {
                var numItems = workersStopped.length,
                    numStoppedItems = 0;

                workersStopped[workerId].stopped = true;

                workersStopped.forEach(function (item, idx, arr) {
                    if (item.stopped === true) {
                        numStoppedItems += 1;
                    }
                });

                if (numItems === numStoppedItems) {
                    deferred.resolve();
                }
            };

            wWorkers.forEach(function (item, idx, arr) {
                item.postMessage([
                    'stop'
                ]);
            });

            return deferred.promise;
        }

        function processWorkerMessage(e) {
            var workerId = e.data[0],
                msgType = e.data[1];

            if (msgType === 'worker_id_received') {

            } else if (msgType === 'seed_received') {
                wWorkers[workerId].postMessage([
                    'start'
                ]);
            } else if (msgType === 'generate') {
                putPixel(e.data[2], e.data[3], e.data[4], e.data[5], e.data[6]);
            } else if (msgType === 'work_started') {
                if (resolveDefStartAllWorkers !== null) {
                    resolveDefStartAllWorkers(workerId);
                }
            } else if (msgType === 'work_stopped') {
                resolveDefStopAllWorkers(workerId);
            }
        }

        return {
            init: init
        };
    });
}(window.define, window.require));
