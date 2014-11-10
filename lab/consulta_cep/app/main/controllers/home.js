define(
// require.js dependency injection
[
  '../module'
],

// require.js module scope
function(module) {
  'use strict';

  module.controller(
    // controller name
    'HomeCtrl',

    // dependencies injection
    [
      '$scope', '$location',

  // controller definition
  function ($scope, $location) {

    $location.path('/cep');

  }]);

});
