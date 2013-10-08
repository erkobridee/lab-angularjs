describe('Unit: Testing Dependency Factory', function() {

  var factory;

  // excuted before each "it" is run
  beforeEach(function() {

     // load the module
    module('app.dep');

    // inject dependencies
    inject(function(DependencyFactory) {
      factory = DependencyFactory;
    });    

  });

  /*
  it('should be defined', function() {
    expect(factory).toBeDefined(true);
  });
  */

  // check to see if it has the expected function
  it('should have an exciteText function', function () { 
    expect(angular.isFunction(factory.exciteText)).toBe(true);
  });
  
  // check to see if it does what it's supposed to do
  it('should make text exciting', function () {
    var result = factory.exciteText('aloha');
    expect(result).toBe('aloha!!!');
  });

});