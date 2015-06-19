(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    var estados = [
      {
        'nome': 'Paraná',
        'cidades': [ 'Curitiba', 'Cascavel', 'Foz do Iguaçu', 'Dois Vizinhos', 'Francisco Beltrão' ]
      },
      {
        'nome': 'Santa Catarina',
        'cidades': [ 'Florianópolis', 'Joinville', 'Palma Sola', 'Anchieta' ]
      }
    ];

    //---

    vm.estados = estados;
    vm.estadoSelecionado = '';
    vm.cidadeSelecionada = '';

  }

})();
