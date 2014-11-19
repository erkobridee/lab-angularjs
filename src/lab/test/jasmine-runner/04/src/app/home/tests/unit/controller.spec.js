describe('Unit: Testing Home Controller', function() {

  var vm, scope;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('home');

    // inject dependencies
    inject(function($controller, $rootScope, $log) {
      scope = $rootScope.$new();

      vm = $controller('HomeCtrl', {
        $scope: scope,
        console: $log
      });
    });

  });


  it('should have a pageName equals to \'Home Page\'', function() {
    expect(vm.pageName).toEqual('Home Page');
  });

});
