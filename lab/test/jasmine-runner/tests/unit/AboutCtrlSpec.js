describe('Unit: Testing About Controller', function() {

  beforeEach(module('app'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));


  it('should have a pageName equals to \'About Page\'', function() {
    expect(scope.pageName).toEqual('About Page');
  });

});