(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    var estados = [
      {
        'name': 'Paraná',
        'cidades': [ 'Dois Vizinhos', 'Francisco Beltrão' ]
      },
      {
        'name': 'Santa Catarina',
        'cidades': [ 'Palma Sola', 'Anchieta' ]
      }
    ];

    //---

    vm.estados = estados;
    vm.estadoSelecionado = '';
    vm.cidadeSelecionada = '';

  }

})();
