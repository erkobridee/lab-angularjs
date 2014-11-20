describe('Unit: Testing About Controller', function() {

  var vm, scope;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('about');

    // inject dependencies
    inject(function($controller, $rootScope, $log) {
      scope = $rootScope.$new();

      vm = $controller('AboutCtrl', {
        $scope: scope,
        console: $log
      });
    });

  });


  it('should have a pageName equals to \'About Page\'', function() {
    expect(vm.pageName).toEqual('About Page');
  });

});
