define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(
    // dependency injection
    ['$routeProvider',

  function(routeProvider) {

    routeProvider
      .when(
        '/about',
        {
          controller: 'AboutCtrl',
          templateUrl: 'app/about/template.html'
        }
      );

  }]);

});
