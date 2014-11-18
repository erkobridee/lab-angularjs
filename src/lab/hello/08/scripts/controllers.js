(function() {
  'use strict';

  angular.module('app').controller('ctrl.Hello', HelloCtrl);

  //---

  HelloCtrl.$inject = ['$scope'];

  function HelloCtrl(scope) {

    scope.hello = 'Angular JS - Hello World 08 :: With require.js';

  }

})();
