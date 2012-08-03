angular.module('App', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {controller: ctrl.CheckDeviceCtrl, templateUrl:'tpl/checkdevice.html'})
      .when('/mobile', {controller: ctrl.MobileCtrl, templateUrl:'tpl/mobile.html'})
      .when('/tablet', {controller: ctrl.TabletCtrl, templateUrl:'tpl/tablet.html'})
      .when('/desktop', {controller: ctrl.DesktopCtrl, templateUrl:'tpl/desktop.html'})
  });

/*
function CheckDeviceCtrl($scope, $location) {

  console.log(navigator);

  console.log( $.device )

  $location.path(['', $.device.type, ''].join('/'));

}

function MobileCtrl($scope) {
  $scope.pageName = 'Mobile Page';
}

function TabletCtrl($scope) {
  $scope.pageName = 'Tablet Page';
}

function DesktopCtrl($scope) {
  $scope.pageName = 'Desktop Page';
}
*/