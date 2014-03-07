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
    ['$routeProvider', 

  function(routeProvider) {

    routeProvider
      .when(
        '/404',
        {
          templateUrl: 'app/main/templates/404.html'
        }
      )
      .otherwise({redirectTo:'/404'});

  }]);


});