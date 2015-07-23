define('module1-test1', [], function () {
  console.log('[DEBUG]: We are in define("module1-test1") function.');

  function init() {
    console.log('[DEBUG]: We are in init() function.');
  }

  return {
    init: init
  };
});
