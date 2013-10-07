angular.module('app.dep').controller(
  
  // controller name
  'DependencyCtrl', 

  // dependencies injection
  ['$scope', 

function($scope) {

  $scope.value = 'Application Dependency Module Value';

  $scope.sum = function(a, b) {
    return a+b;
  };

}]);