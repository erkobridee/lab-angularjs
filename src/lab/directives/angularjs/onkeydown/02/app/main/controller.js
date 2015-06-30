(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  function MainCtrl() {

    var enterCount = 0;
    var escCount = 0;

    //---

    var vm = this;

    //---

    vm.clearLog = clearLog;

    vm.onEnter = onEnterHandler;
    vm.onEsc = onEscHandler;

    //---

    function clearLog() {
      enterCount = 0;
      escCount = 0;
      console.clear();
    }

    function onEnterHandler() {
      enterCount++;
      var msg = 'ENTER pressed : ' + enterCount + '\n';
      console.log( msg );
    }

    function onEscHandler() {
      escCount++;
      var msg = 'ESC pressed : ' + escCount + '\n';
      console.log( msg );
    }

  }

})();
