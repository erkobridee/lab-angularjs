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
    ['$routeProvider',

  // routes definition
  function ($routeProvider) {

    $routeProvider
      .when(
        '/',
        {
          controller: 'HomeCtrl',
          templateUrl: 'app/main/templates/home.html'
        }
      )
      .when(
        '/404',
        {
          templateUrl: 'app/main/templates/404.html'
        }
      )
      .otherwise({ redirectTo: '/404' });

  }]);

});
