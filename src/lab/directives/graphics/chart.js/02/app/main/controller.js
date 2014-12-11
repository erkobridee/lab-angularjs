(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    var labels = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho'
    ];

    var datasets= [
      {
        fillColor: 'rgba(220,220,220,0.5)',
        data: [
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber()
        ]
      },
      {
        fillColor: 'rgba(151,187,205,0.5)',
        data: [
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber()
        ]
      }
    ];

    //---

    vm.labels = labels;
    vm.datasets = datasets;

    //---

    function randomNumber() {
      return Math.round( Math.random() * 100 );
    }


  }

})();
