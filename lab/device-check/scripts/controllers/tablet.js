angular.module('app').controller(

  // controller name
  'ctrl.Tablet',

  // dependencies injection
  ['$scope',

// controller definition
function($scope) {

  $scope.pageName = 'Tablet Page';

  $scope.userAgent = $.device.userAgent;

}]);
