describe('Angular.js \'app.dep\' Module', function() {

  var module;

  beforeEach(function() {
    module = angular.module('app.dep');
  });

  it("should be registered", function() {
    expect(module).not.toEqual(null);
  });

});