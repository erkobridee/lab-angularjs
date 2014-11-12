(function() {
  'use strict';

  angular.module(
    'store',
    [{
      name: 'cart',
      files: ['cart/require.load']
    }]
  ).controller('StoreCtrl', StoreCtrl);

  //---

  StoreCtrl.$inject = ['list'];

  function StoreCtrl(list) {
    var vm = this;

    vm.message = list.items;
  }

})();
