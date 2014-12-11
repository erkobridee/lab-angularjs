(function() {
  'use strict';

  angular.module( 'app' ).controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = [ 'stockService' ];

  function MainCtrl( stockService ) {
    var vm = this;

    vm.series = [];
    vm.init =  init;

    //---

    vm.init();

    //---

    function init() {

      stockService.getStockData().then(onSuccess);

      //---

      function onSuccess( data ) {
        var serie = {
          type: 'area',
          name: 'Stock Volume',
          data: data.data
        };

        vm.series = [ serie ];
      }

    }

  }

})();
