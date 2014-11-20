define(
// require.js dependecy injection
[
  './module'
],

//require.js module scope
function(module) {
  'use strict';


  module.config(
    // dependency injection
    ['$routeProvider', '$locationProvider',

  function(routeProvider, $locationProvider) {

    routeProvider
      .when(
        '/404', {
          templateUrl: 'app/main/templates/404.html'
        }
      )
      .otherwise({ redirectTo:'/404' });

      $locationProvider.html5Mode(true);

  }]);


});