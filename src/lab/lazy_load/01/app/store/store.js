(function() {
  'use strict';

  angular.module(
    'store',
    [{
      name: 'cart',
      files: ['app/cart/cart.js']
    }]
  ).controller('StoreCtrl', StoreCtrl);

  //---

  StoreCtrl.$inject = ['list'];

  function StoreCtrl(list) {
    var vm = this;

    vm.message = list.items;
  }

})();
