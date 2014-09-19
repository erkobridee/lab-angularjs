define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller(
    // controller name
    'HomeCtrl',

    // dependency injection
    ['$scope',

  // controller definition
  function(scope) {

    scope.value = ':: home ::';

    scope.jsObject = {
      location: '/',
      pageName: 'Home'
    };

  }]);

});
