define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('AppCtrl', AppCtrl);

  //---

  AppCtrl.$inject = ['$state'];

  function AppCtrl($state) {
    var vm = this;

    vm.click = function () {
      $state.go('lazy_store');
    };
  }

});
