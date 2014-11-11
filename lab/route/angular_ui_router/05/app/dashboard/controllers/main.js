define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller(

    // controller name
    'DashboardMainCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function(scope) {

    scope.someValue = 'Value from Dashboad Main Controller';

  }]);

});
