var Ctrl = (function() {

  function Ctrl() {}

  Ctrl.prototype.CheckDeviceCtrl = function($scope, $location) {

    console.log(navigator);

    console.log( $.device )

    $location.path(['', $.device.type, ''].join('/'));

  }

  Ctrl.prototype.MobileCtrl = function($scope) {
    $scope.pageName = 'Mobile Page';
  }

  Ctrl.prototype.TabletCtrl = function($scope) {
    $scope.pageName = 'Tablet Page';
  }

  Ctrl.prototype.DesktopCtrl = function($scope) {
    $scope.pageName = 'Desktop Page';
  }

  return Ctrl;

})();

var ctrl = new Ctrl();