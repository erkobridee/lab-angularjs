(function() {
  'use strict';

  angular.module(
    'store',
    [{
      name: 'cart',
      files: ['app/cart/cart.js']
    }]
  ).controller('StoreCtrl', ['list', function (list) {

    var store = this;
    store.message = list.items;

  }]);

})();
