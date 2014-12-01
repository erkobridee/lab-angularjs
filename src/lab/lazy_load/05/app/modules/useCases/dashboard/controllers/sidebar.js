define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DashboardSidebarCtrl', DashboardSidebarCtrl);

  //---

  //DashboardSidebarCtrl.$inject = [];

  function DashboardSidebarCtrl() {
    var vm = this;

    vm.someValue = 'Value from Dashboad Sidebar Controller';

  }

});
