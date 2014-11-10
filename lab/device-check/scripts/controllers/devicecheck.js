angular.module('app').controller(

  // controller name
  'ctrl.CheckDevice',

  // dependencies injection
  ['$scope', '$location',

// controller definition
function($scope, $location) {

  //console.log(navigator);

  console.log( $.device );

  $location.path(['', $.device.type, ''].join('/'));

}]);
