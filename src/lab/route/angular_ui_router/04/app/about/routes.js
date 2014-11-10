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
    ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('about', {
          url: '/about',
          controller: 'AboutCtrl',
          templateUrl: 'app/about/template.html'
        });

  }]);


});
