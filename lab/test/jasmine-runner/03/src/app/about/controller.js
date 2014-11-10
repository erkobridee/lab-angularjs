define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

  module.controller(
    // controller name
    'AboutCtrl',

    // dependencies injection
    [
      '$scope', '$log',

  // controller definition
  function ($scope, console) {

    console.debug( 'AboutCtrl' );

    $scope.pageName = 'About Page';

  }]);

});
