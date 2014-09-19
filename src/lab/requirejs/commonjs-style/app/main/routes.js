define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(
    // dependency injection
    ['$routeProvider',

  function(routeProvider) {

    routeProvider
      .when(
        '/404',
        {
          templateUrl: 'app/main/templates/404.html'
        }
      )
      .otherwise({redirectTo:'/404'});

  }]);

});
