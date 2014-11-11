define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller(

    // controller name
    'AboutCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function(scope) {

    scope.someValue = 'Value from About Controller';

  }]);

});
