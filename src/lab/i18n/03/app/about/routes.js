define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(routesConfig);
    
  routesConfig.$inject = [ '$routeProvider', '$locationProvider' ]; 

  function routesConfig($routeProvider, $locationProvider) {    
    $routeProvider
      .when('/about', { templateUrl: 'app/about/templates/about.html' });

    $locationProvider.html5Mode(true);
  }

});
