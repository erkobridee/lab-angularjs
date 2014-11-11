define(function(require) {
  'use strict';

  var module = require('../module');

    module.controller(

    // controller name
    'DashboardAnalyticsCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function(scope) {

    this.someValue = 'Value from Dashboad Analytics Controller';

  }]);

});
