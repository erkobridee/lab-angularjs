describe('Unit: Testing dep1 Controller', function() {

  var vm, scope;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('dep1');

    // inject dependencies
    inject(function($controller, $rootScope, $log) {
      scope = $rootScope.$new();

      vm = $controller('Dep1Ctrl', {
        console: $log
      });
    });

  });

  it('should have a value to equal \'Application Dependency Module Value\'', function() {
    expect(vm.value).toEqual('Application Dependency Module Value');
  });

  it('should sum 123 + 321 to be 444', function() {
    expect(vm.sum(123, 321)).toBe(444);
  });

});
