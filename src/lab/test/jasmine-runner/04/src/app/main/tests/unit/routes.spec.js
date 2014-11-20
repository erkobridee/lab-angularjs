describe('ui.router: \'main\'', function() {

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

      var config;

      it("should be defined", function() {
        // arrange
        config = state.get('404');

        // assertions
        expect(config).toBeDefined();
      });

      it("should map url to \'/404\'", function() {
        expect(config.url).toEqual('/404');
      });

      describe("views", function() {
        var view;

        it("should views be defined", function() {
          // arrange
          views = config.views;

          // assertions
          expect(views).toBeDefined();
        });

        describe("master", function() {
          var master;

          it("should be defined", function() {
            // arrange
            master = views.master;

            // assertions
            expect(master).toBeDefined();
          });

          it("should map to templateUrl \''app/main/templates/404.html'\'", function() {
            expect(master.templateUrl).toEqual('app/main/templates/404.html');
          });

        });

      });

    });

  }); //--- end: States Map

});
