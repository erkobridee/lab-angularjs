describe('Unit: Testing dep1 depWelcome Directive', function() {

  var scope, compile;

  // excuted before each "it" is run
  beforeEach(function() {

    //load the module
    module('dep1');

    // inject dependencies
    inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });

  });

  describe('as attribute', function(){

    it("should display the welcome text properly", function() {
      var element = compile('<div data-dep-welcome>User</div>')(scope);
      scope.$digest();

      var html = element.html();
      //console.log(html);

      expect(html).toMatch(/Welcome/i);
    });

  });

  describe('as element', function() {

    it('should display the welcome text properly', function() {
      var element = compile('<dep-welcome>User</dep-welcome>')(scope);
      scope.$digest();

      var html = element.html();
      //console.log(html);

      expect(html).toMatch(/Welcome/i);
    });

  });

  describe('as class', function() {

    it('should not display the welcome text properly', function() {
      var element = compile('<div class="dep-welcome">User</div>')(scope);
      scope.$digest();

      var html = element.html();
      //console.log(html);

      expect(html).not.toMatch(/Welcome/i);
    });

  });

});
