(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  function MainCtrl() {

    var vm = this;

    vm.data = [
      {id: 1, first_name: 'Mark', last_name: 'Otto', username: '@mdo'},
      {id: 2, first_name: 'Jacob', last_name: 'Thornton', username: '@fat'},
      {id: 3, first_name: 'Larry', last_name: 'The Bird', username: '@twitter'},
      {id: 4, first_name: 'Erko', last_name: 'Bridee', username: '@erkobridee'}
    ];

  }

})();
