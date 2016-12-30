define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

  module.config(

    // dependencies injection
    ['$routeProvider', '$locationProvider',

  // routes definition
  function ($routeProvider, $locationProvider) {

    // remove the ! added by angular v1.6.1
    $locationProvider.hashPrefix('');

    $routeProvider
      .when(
        '/404',
        {
          templateUrl: 'app/main/templates/404.html'
        }
      )

      .otherwise({redirectTo:'/404'});

  }]);

});
