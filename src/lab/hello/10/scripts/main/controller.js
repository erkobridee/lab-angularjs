define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';


  module.controller('ctrl.Hello', HelloCtrl);

  //---

  HelloCtrl.$inject = ['$scope'];

  function HelloCtrl(scope) {

    scope.hello = 'Angular JS - Hello World 10 :: Require.js code style';

  }


});
