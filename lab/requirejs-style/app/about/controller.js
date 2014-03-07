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
    'AboutCtrl', 

    // dependency injection
    ['$scope', 

  // controller definition
  function(scope){

    scope.value = ':: about ::';

    scope.jsObject = {
      location: '/about',
      pageName: 'About'
    };

  }]);


});