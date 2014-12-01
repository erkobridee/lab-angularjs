define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DashboardExportCtrl', DashboardExportCtrl);

  //---

  //DashboardExportCtrl.$inject = [];

  function DashboardExportCtrl() {
    var vm = this;

    vm.someValue = 'Value from Dashboad Export Controller';

  }

});
