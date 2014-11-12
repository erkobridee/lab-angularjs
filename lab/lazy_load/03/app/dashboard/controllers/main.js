define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DashboardMainCtrl', DashboardMainCtrl);

  //---

  //DashboardMainCtrl.$inject = [];

  function DashboardMainCtrl(){
    var vm = this;

    vm.someValue = 'Value from Dashboad Main Controller';

  }

});
