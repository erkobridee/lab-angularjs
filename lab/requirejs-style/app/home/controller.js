define(
// require.js dependecy injection
[
  './module'
],

//require.js module scope
function(module) {
  'use strict';


  module.controller(
    // controller name
    'HomeCtrl', 

    // dependency injection
    ['$scope', 

  // controller definition
  function(scope) {

    scope.value = ':: home ::';

    scope.jsObject = {
      location: '/',
      pageName: 'Home'
    };

  }]);


});