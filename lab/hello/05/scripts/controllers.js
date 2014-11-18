(function() {
  'use strict';

  var app = angular.module('app', []);

  app.controller('ctrl.Hello', HelloCtrl);

  //---

  HelloCtrl.$inject = ['$scope'];

  function HelloCtrl(scope) {

    scope.hello = 'Angular JS - Hello World 05';

  }

})();
