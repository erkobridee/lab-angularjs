define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(
    // dependency injection
    ['$routeProvider',

    function(routeProvider) {

      routeProvider
        .when(
          '/pageWithoutController',
          {
            templateUrl: 'app/pageWithoutController/template.html'
          }
        );

    }]);

});
