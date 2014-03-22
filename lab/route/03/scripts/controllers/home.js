define(
// require.js dependency injection
[
  '../main/module'
],

// require.js module scope
function(module) {
  'use strict';


  module.controller(

    // controller name
    'HomeCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function(scope) {

    scope.greetings = 'Home controller say: Welcome to Angular Routes Example';

  }]);


});
