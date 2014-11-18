var ctrl = (function() {

  function HelloCtrl(scope) {
    scope.hello = 'Angular JS - Hello World 04';
  }

  HelloCtrl.$inject = ['$scope'];

  return {

    /* old style
    Hello: ['$scope', function(scope) {
      scope.hello = 'Angular JS - Hello World 04';
    }]
    */

    Hello: HelloCtrl

  };

})();
