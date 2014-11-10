describe('Unit: Testing modules.dep1 Filter', function() {

  var filter;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('modules.dep1');

    // inject dependencies
    inject(function($filter) {
      filter = $filter('reverse');
    });

  });

  /*
  it('should be defined', function() {
    expect(filter).toBeDefined(true);
  });
  */

  it('should reverse string \'This is Sparta\' to \'atrapS si sihT\'', function() {
    expect(filter('This is Sparta')).toEqual('atrapS si sihT');
  });

  it('should reverse string \'This is Sparta\' to uppercase \'ATRAPS SI SIHT\'', function() {
    expect(filter('This is Sparta', true)).toEqual('ATRAPS SI SIHT');
  });

});
