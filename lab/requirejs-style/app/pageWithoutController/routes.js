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
          '/pageWithoutController',
          {
            templateUrl: 'app/pageWithoutController/template.html'
          }
        );

    }]);

});