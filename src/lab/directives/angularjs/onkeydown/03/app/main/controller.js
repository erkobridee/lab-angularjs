(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  function MainCtrl() {

    var countMap = {
      A: 0,
      S: 0,
      D: 0,
      W: 0
    };

    //---

    var vm = this;

    //---

    vm.name = 'body';

    vm.clearLog = clearLog;
    vm.onKey = onKeyHandler;

    //---

    function clearLog() {
      countMap.A = countMap.S = countMap.D = countMap.W = 0;
      console.clear();
    }

    function onKeyHandler(keyName) {
      countMap[keyName]++;
      console.log( vm.name + ' ' + keyName + ' pressed: ' + countMap[keyName] );
    }

  }

})();
