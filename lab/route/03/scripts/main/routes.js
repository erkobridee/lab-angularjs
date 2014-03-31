define(
// require.js dependency inection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';


  module.config(

    // dependencies injection
    ['$routeProvider',

  function(routeProvider) {

      routeProvider
        .when(
          '/',
          {
            controller: 'HomeCtrl',
            templateUrl:'views/home.html'
          }
        )
        .when(
          '/about',
          {
            controller: 'AboutCtrl',
            templateUrl:'views/about.html'
          }
        )
        .when(
          '/404',
          {
            templateUrl: 'views/404.html'
          }
        )
        .otherwise({ redirectTo: '/404' });

  }]);


});
