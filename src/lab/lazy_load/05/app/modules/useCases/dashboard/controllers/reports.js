define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DashboardReportsCtrl', DashboardReportsCtrl);

  //---

  //DashboardReportsCtrl.$inject = [];

  function DashboardReportsCtrl() {
    var vm = this;

    vm.someValue = 'Value from Dashboad Reports Controller';

  }

});
