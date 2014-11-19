describe('Angular.js \'main\' Routes', function() {

  var state, stateProvider, urlRouterProvider;

  beforeEach(function() {

    module('main', function($stateProvider, $urlRouterProvider) {
      stateProvider = $stateProvider;
      urlRouterProvider = $urlRouterProvider;
    });
    // module('ui.router');

    inject(function($state) {
      state = $state;

      // console.log(state);
    });

    // console.log('main/routes.spec.js');
    // console.log(state.states);

  });

  /* only to check if injection work fine
  it('$route should be defined', function() {
    expect(route).not.toEqual(null);
  });
  */

  // http://bardo.io/posts/testing-your-ui-router-configuration/

  describe("States Map", function() {

    it('$state should be present', function() {

      var config = state.get('404');

      console.log(stateProvider);
      console.log(urlRouterProvider);
      console.log(config);

      // expect(state).not.toEqual(null);
      expect(state).not.toBeNull();
    });

    describe("404 state", function() {

      var config;

      beforeEach(function() {
        config = state.get('404');
      });

      it("should map url to \'/404\'", function() {
        expect(config.url).toEqual('/404');
      });

      it("should views be defined", function() {
        expect(config.views).toBeDefined();
      });

      it("should map views.master templateUrl to \''app/main/templates/404.html'\'", function() {
        expect(config.views.master.templateUrl).toEqual('app/main/templates/404.html');
      });

    });

  });

  /*
  describe('Routes Map', function() {

    / * only to check if injection work fine
    it('$route should be present', function() {
      expect(route).not.toEqual(null);
      expect(route).not.toBeNull();
    });
    * /

    describe('location \'/404\'', function() {

      it('should be defined', function() {
        expect(route.routes['/404']).toBeDefined();
      });

      it('should map to templateUrl app/main/templates/404.html', function() {
        expect(route.routes['/404'].templateUrl).toEqual('app/main/templates/404.html');
      });

    });

    describe('otherwise is the empty string', function() {

      it('should redirect to location \'/404\'', function() {
        expect(route.routes[null].redirectTo).toEqual('/404');
      });

    });

  }); */ //--- end: Routes Map

});
