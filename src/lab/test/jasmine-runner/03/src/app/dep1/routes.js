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

  // routes definition
  function ($routeProvider) {

    $routeProvider
      .when(
        '/dep1',
        {
          controller: 'Dep1Ctrl',
          templateUrl: 'app/dep1/template.html'
        }
      );

  }]);

});
