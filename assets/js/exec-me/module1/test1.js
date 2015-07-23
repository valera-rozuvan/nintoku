define('exec-me/module1/test1', [], function () {
  function init() {
    console.log('[DEBUG]: We are in ');
  }

  return {
    init: init
  };
});
