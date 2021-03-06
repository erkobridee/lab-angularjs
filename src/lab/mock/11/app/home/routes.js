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
          '/',
          {
            controller: 'HomeCtrl',
            templateUrl:'app/home/template.html'
          }
        );

  }]);


});
