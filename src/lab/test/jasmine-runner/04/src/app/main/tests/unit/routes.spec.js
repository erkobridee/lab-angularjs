describe('Angular.js \'main\' Routes', function() {

  var state, stateProvider, urlRouterProvider;

  beforeEach(function() {

    // necessary? probably no...
    module('main', function($stateProvider, $urlRouterProvider) {
      stateProvider = $stateProvider;
      urlRouterProvider = $urlRouterProvider;
    });

    inject(function($state) {
      state = $state;
    });

  });

  describe("States Map", function() {

    it('$state should be present', function() {

      // console.log(stateProvider);
      // console.log(urlRouterProvider);

      // var config = state.get('404');
      // console.log(config);

      expect(state).not.toBeNull();
    });

    describe("404 state", function() {

      var config, views;

      it("should be defined", function() {
        // arrange
        config = state.get('404');

        // assertions
        expect(config).toBeDefined();
      });

      it("should map url to \'/404\'", function() {
        expect(config.url).toEqual('/404');
      });

      it("should views be defined", function() {
        // arrange
        views = config.views;

        // assertions
        expect(views).toBeDefined();
      });

      it("should map views.master templateUrl to \''app/main/templates/404.html'\'", function() {
        expect(views.master.templateUrl).toEqual('app/main/templates/404.html');
      });

    });

  }); //--- end: States Map

});
