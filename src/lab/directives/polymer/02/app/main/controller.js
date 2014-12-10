(function() {
  'use strict';

  angular.module( 'app' ).controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    vm.name = '';

  }

})();
