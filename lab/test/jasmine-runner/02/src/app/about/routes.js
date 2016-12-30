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
        '/about',
        {
          controller: 'AboutCtrl',
          templateUrl: 'app/about/template.html'
        }
      );

  }]);

});
