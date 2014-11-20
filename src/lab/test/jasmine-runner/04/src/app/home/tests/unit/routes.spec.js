describe('ui.router: \'home\'', function() {

  var state;

  beforeEach(function() {
    module('home');

    inject(function($state) {
      state = $state;
    });

  });

  describe("States Map", function() {

    describe("$state", function() {

      it("should be define", function() {
        expect(state).toBeDefined();
      });

    });

    describe("home state", function() {

      var config;

      it("should be defined", function() {
        // arrange
        config = state.get('home');

        // assertions
        expect(config).toBeDefined();
      });

      it("should map to url \'/\'", function() {
        expect(config.url).toEqual('/');
      });

      describe("views", function() {

        var views;

        it("should be defined", function() {
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

          it("should map to templateUrl \'app/home/template.html\'", function() {
            expect(master.templateUrl).toBeDefined('app/home/template.html');
          });

          it("should map to controller HomeCtrl", function() {
            expect(master.controller).toEqual('HomeCtrl');
          });

          it("should map to controllerAs vm", function() {
            expect(master.controllerAs).toEqual('vm');
          });

        });

      });

    });

  }); //--- end: States Map

});
