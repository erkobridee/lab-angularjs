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
    'ctrl.Hello', 

    // dependency injection
    ['$scope', 

  // controller definition
  function(scope){
    
    scope.hello = 'Angular JS - Hello World 10 :: Require.js code style';

  }]);


});