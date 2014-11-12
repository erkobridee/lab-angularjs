define(function(require) {
  'use strict';

  var module = require('./module');

  module.service('list', ListService);

  //---

  function ListService() {
    var vm = this;

    vm.items = ['shoe', 'apple', 'phone'];
  }

});
