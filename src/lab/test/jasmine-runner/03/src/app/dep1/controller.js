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
    'Dep1Ctrl',

    // dependencies injection
    ['$scope', '$log', 'Dep1Factory', 'Dep1Service',

  function($scope, console, depFactory, depService) {

    console.debug( 'Dep1Ctrl' );

    $scope.value = 'Application Dependency Module Value';

    $scope.message = 'This is Sparta';


    $scope.sum = function(a, b) {
      return a+b;
    };

    $scope.toExciteMsg = function(msg) {
      return depFactory.exciteText(msg);
    };

    $scope.toQuestionMsg = function(msg) {
      return depService.questionText(msg);
    };

  }]);


});
