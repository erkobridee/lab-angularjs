angular.module('app').controller(

  // controller name
  'ctrl.Desktop',

  // dependencies injection
  ['$scope',

// controller definition
function($scope) {

  $scope.pageName = 'Desktop Page';

  $scope.userAgent = $.device.userAgent;

}]);
