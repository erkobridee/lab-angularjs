(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  function MainCtrl() {
    var vm = this;

    var data = [
      {
        'name': 'Eduardo',
        'age': 22
      },
      {
        'name': 'Royer',
        'age': 25
      }
    ];

    //---

    vm.titles = [ 'Name', 'Age' ];
    vm.data   = data;

  }

})();
