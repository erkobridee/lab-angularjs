describe('Angular.js \'dep1\' Routes', function() {

  var route;

  beforeEach(function() {
    module('dep1');

    inject(function($route) {
      route = $route;
    });
  });

  /* only to check if injection work fine
  it('$route should be defined', function() {
    expect(route).not.toEqual(null);
  });
  */

  describe('Routes Map', function() {

    /* only to check if injection work fine
    it('$route should be present', function() {
      expect(route).not.toEqual(null);
    });
    */


    describe('location \'/dep1\'', function() {

      it('should be defined', function() {
        expect(route.routes['/dep1']).toBeDefined();
      });

      it('should map to controller DependencyCtrl', function() {
        expect(route.routes['/dep1'].controller).toBe('Dep1Ctrl');
      });

      it('should map to templateUrl app/dep1/template.html', function() {
        expect(route.routes['/dep1'].templateUrl).toEqual('app/dep1/template.html');
      });

    });


  }); //--- end: Routes Map

});
