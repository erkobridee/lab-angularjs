define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DashboardAnalyticsCtrl', DashboardAnalyticsCtrl);

  //---

  // DashboardAnalyticsCtrl.$inject = [];

  function DashboardAnalyticsCtrl() {
    var vm = this;

    vm.someValue = 'Value from Dashboad Analytics Controller';

  }

});
