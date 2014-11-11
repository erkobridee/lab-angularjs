define(function(require) {
  'use strict';

  var module = require('../module');

    module.controller(

    // controller name
    'DashboardExportCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function(scope) {

    this.someValue = 'Value from Dashboad Export Controller';

  }]);

});
