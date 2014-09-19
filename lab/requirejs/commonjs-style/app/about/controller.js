define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller(
    // controller name
    'AboutCtrl',

    // dependency injection
    ['$scope',

  // controller definition
  function(scope){

    scope.value = ':: about ::';

    scope.jsObject = {
      location: '/about',
      pageName: 'About'
    };

  }]);

});
