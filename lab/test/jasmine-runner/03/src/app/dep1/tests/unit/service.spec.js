describe('Unit: Testing dep1 Service', function() {

  var service;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('dep1');

    // inject dependencies
    inject(function(Dep1Service) {
      service = Dep1Service;
    });

  });

  /*
  it('should be defined', function() {
    expect(service).toBeDefined(true);
  });
  */

  // check to see if it has the expected function
  it('should have a questionText function', function () {
    expect(angular.isFunction(service.questionText)).toBe(true);
  });

  // check to see if it does what it's supposed to do
  it('should make question text', function () {
    var result = service.questionText('Where to go');
    expect(result).toBe('Where to go???');
  });

});
