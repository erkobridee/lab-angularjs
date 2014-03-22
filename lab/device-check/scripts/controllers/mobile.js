angular.module('app').controller(

  // controller name
  'ctrl.Mobile',

  // dependencies injection
  ['$scope',

// controller definition
function($scope) {

  $scope.pageName = 'Mobile Page';

  $scope.userAgent = $.device.userAgent;

}]);
