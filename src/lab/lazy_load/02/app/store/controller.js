define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('StoreCtrl', StoreCtrl);

  //---

  StoreCtrl.$inject = ['list'];

  function StoreCtrl(list) {
    var vm = this;

    vm.message = list.items;
  }

});
