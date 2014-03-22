describe('Angular.js \'app\' Routes', function() {

  var route;

  beforeEach(function() {
    module('app');

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

    describe('location \'/\'', function() {

      it('should be defined', function() {
        expect(route.routes['/']).toBeDefined();
      });

      it('should map to controller HomeCtrl', function() {
        expect(route.routes['/'].controller).toBe('HomeCtrl');
      });

      it('should map to templateUrl home/tpl.html', function() {
        expect(route.routes['/'].templateUrl).toEqual('home/tpl.html');
      });

    });


    describe('location \'/about\'', function() {

      it('should be defined', function() {
        expect(route.routes['/about']).toBeDefined();
      });

      it('should map to controller AboutCtrl', function() {
        expect(route.routes['/about'].controller).toBe('AboutCtrl');
      });

      it('should map to templateUrl about/tpl.html', function() {
        expect(route.routes['/about'].templateUrl).toEqual('about/tpl.html');
      });

    });


    describe('location \'/dep1\'', function() {

      it('should be defined', function() {
        expect(route.routes['/dep1']).toBeDefined();
      });

      it('should map to controller DependencyCtrl', function() {
        expect(route.routes['/dep1'].controller).toBe('Dep1Ctrl');
      });

      it('should map to templateUrl depModule/tpl.html', function() {
        expect(route.routes['/dep1'].templateUrl).toEqual('modules/dep1/tpl.html');
      });

    });

    describe('otherwise is the empty string', function() {

      it('should redirect to location \'/\'', function() {
        expect(route.routes[null].redirectTo).toEqual('/');
      });

    });

  }); //--- end: Routes Map

});
