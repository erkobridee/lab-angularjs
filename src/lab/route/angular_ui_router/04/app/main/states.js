define(
// require.js dependecy injection
[
  './module'
],

//require.js module scope
function(module) {
  'use strict';


  module.config(

    // dependencies injection
    ['$stateProvider', '$urlRouterProvider', '$locationProvider',

  function($stateProvider, $urlRouterProvider, $locationProvider) {

      // remove the ! added by angular v1.6.1
      $locationProvider.hashPrefix('');

      $urlRouterProvider
        .when('', '/') // default
        .otherwise("/404"); // For any unmatched url, redirect to /404


      $stateProvider
        .state('404', {
          url: '/404',
          templateUrl: 'app/main/templates/404.html'
        });

  }]);


});
