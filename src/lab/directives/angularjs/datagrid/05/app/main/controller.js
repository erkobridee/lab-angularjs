(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  function MainCtrl() {
    var vm = this;

    var data = [];

    for(var i = 0; i < 10; i++) {
      data.push({ id: i, name: 'Teste ' + i, age: i });
    }

    //---

    vm.data  = data;
    vm.selectedValues = [];
  }

})();
