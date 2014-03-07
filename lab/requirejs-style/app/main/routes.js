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
          templateUrl: 'app/404/template.html'
        }
      )
      .otherwise({redirectTo:'/404'});

  }]);


});