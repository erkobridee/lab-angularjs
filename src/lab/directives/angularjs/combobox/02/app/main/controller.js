(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    vm.carros = [ 'Bmw M3', 'Ferrari Enzo', 'Fusca', 'Fiat 147' ];
    vm.carroSelecionado = '';

  }

})();
