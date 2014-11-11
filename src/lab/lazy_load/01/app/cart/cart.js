(function() {
  'use strict';

  angular
    .module('cart', [])
    .service('list', list);

  //---

  function list() {
    this.items = ['shoe', 'apple', 'phone'];
  }

})();
