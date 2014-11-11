(function() {
  'use strict';

  angular
    .module('cart', [])
    .service('list', ListService);

  //---

  function ListService() {
    var vm = this;

    vm.items = ['shoe', 'apple', 'phone'];
  }

})();
