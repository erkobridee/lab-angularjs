describe('Unit: Testing Dependency Controller', function() {

  beforeEach(module('app.dep'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('DependencyCtrl', {
      $scope: scope
    });
  }));


  it('should have a value to equal \'Application Dependency Module Value\'', function() {
    expect(scope.value).toEqual('Application Dependency Module Value');
  });

  it('should sum 123 + 321 to be 444', function() {
    expect(scope.sum(123, 321)).toBe(444);
  });

});