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

  function(routeProvider) {

      routeProvider   
        .when(
          '/users', 
          {
            controller: 'UserCtrl',
            templateUrl:'app/users/template.html'
          }
        );

  }]);


});