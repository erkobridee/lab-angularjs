var Ctrl = (function() {

  function Ctrl() {}

  Ctrl.prototype.CheckDevice = function($scope, $location) {

    console.log(navigator);

    console.log( $.device )

    $location.path(['', $.device.type, ''].join('/'));

  }

  Ctrl.prototype.Mobile = function($scope) {
    $scope.pageName = 'Mobile Page';
  }

  Ctrl.prototype.Tablet = function($scope) {
    $scope.pageName = 'Tablet Page';
  }

  Ctrl.prototype.Desktop = function($scope) {
    $scope.pageName = 'Desktop Page';
  }

  return Ctrl;

})();

var ctrl = new Ctrl();