(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    vm.cars = [ 'Bmw M3', 'Ferrari Enzo', 'Fusca', 'Fiat 147' ];

    vm.car1Selected = '';
    vm.car2Selected = '';
  }

})();
