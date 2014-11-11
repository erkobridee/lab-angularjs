define(function(require) {
  'use strict';

  var module = require('../module');

    module.controller(

    // controller name
    'DashboardSidebarCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function(scope) {

    this.someValue = 'Value from Dashboad Sidebar Controller';

  }]);

});
