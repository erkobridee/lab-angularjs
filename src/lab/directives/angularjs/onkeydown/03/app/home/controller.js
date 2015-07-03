(function() {
  'use strict';

  angular.module( 'app' ).controller( 'HomeCtrl', HomeCtrl );

  //---

  function HomeCtrl() {

    var enterCount = 0;
    var escCount = 0;

    //---

    var vm = this;

    //---
    vm.name = 'Home Page';

    vm.onEnter = onEnterHandler;
    vm.onEsc = onEscHandler;

    //---

    function onEnterHandler() {
      enterCount++;
      var msg = vm.name + ' ENTER pressed : ' + enterCount + '\n';
      console.log( msg );
    }

    function onEscHandler() {
      escCount++;
      var msg = vm.name + ' ESC pressed : ' + escCount + '\n';
      console.log( msg );
    }

  }

})();
