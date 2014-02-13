angular.module('app').controller(

  // controller name
  'HomeCtrl', 

  // dependencies injection
  ['$scope', 

// controller definition
function($scope) {
  
  $scope.greetings = 'Home controller say: Welcome to Angular Routes Example';

}]);