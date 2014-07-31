describe('Angular.js \'dep1\' Module', function() {

  var module;

  beforeEach(function() {
    module = angular.module('dep1');
  });

  it("should be registered", function() {
    expect(module).not.toEqual(null);
  });

});
