describe('Unit: Testing Home Controller', function() {

  beforeEach(module('app'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));


  it('should have a pageName equals to \'Home Page\'', function() {
    expect(scope.pageName).toEqual('Home Page');
  });

});