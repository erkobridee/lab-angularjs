angular.module('modules.dep1').controller(

  // controller name
  'Dep1Ctrl',

  // dependencies injection
  ['$scope', 'Dep1Factory', 'Dep1Service',

function($scope, depFactory, depService) {

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
