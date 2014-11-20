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
        '/about',
        {
          templateUrl: 'app/about/templates/about.html'
        }
      );

       $locationProvider.html5Mode(true);

  }]);


});