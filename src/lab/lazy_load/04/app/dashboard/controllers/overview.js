define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DashboardOverviewCtrl', DashboardOverviewCtrl);

  //---

  //DashboardOverviewCtrl.$inject = [];

  function DashboardOverviewCtrl() {
    var vm = this;

    vm.someValue = 'Value from Dashboad Overview Controller';

  }

});
