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
    ['$stateProvider', '$urlRouterProvider', '$locationProvider',

  function($stateProvider, $urlRouterProvider, $locationProvider) {

      // remove the ! added by angular v1.6.1
      $locationProvider.hashPrefix('');

      $urlRouterProvider
        .when('', '/') // default
        .otherwise("/404"); // For any unmatched url, redirect to /404


      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl',
          templateUrl: 'views/home.html'
        })
        .state('about', {
          url: '/about',
          controller: 'AboutCtrl',
          templateUrl: 'views/about.html'
        })
        .state('404', {
          url: '/404',
          templateUrl: 'views/404.html'
        });

  }]);


});
