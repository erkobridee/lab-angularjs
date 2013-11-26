angular.module('app').controller(

  // controller name
  'HomeCtrl',

  // dependencies injection
  ['$scope', 'toaster',

// controller definition
function ($scope, $toaster) {

  $scope.pageName = 'Home Page';

  $scope.popup = function(type) {
	$toaster.pop(type, 'Título', 'Breve texto descritivo aqui...');
  };

}]);