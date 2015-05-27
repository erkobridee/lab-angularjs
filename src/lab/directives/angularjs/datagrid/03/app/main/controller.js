(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  function MainCtrl() {
    var vm = this;

    var data = [
      {
        'name': 'Eduardo Royer',
        'age': 22
      },
      {
        'name': 'Akira',
        'age': 25
      },
      {
        'name': 'Erko Bridee',
        'age': 30
      }
    ];

    //---

    vm.titles = [ 'Name', 'Age' ];
    vm.data   = data;

  }

})();
