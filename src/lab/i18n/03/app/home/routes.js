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
        '/', { 
          redirectTo:'/home' 
        })
      .when(
        '/home',
        {
          templateUrl: 'app/home/templates/home.html',
          controller: 'HomeCtrl'
        }
      );

      $locationProvider.html5Mode(true);

  }]);


});