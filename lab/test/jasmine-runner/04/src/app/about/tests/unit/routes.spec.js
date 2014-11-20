describe('ui.router: \'about\'', function() {

  var state;

  beforeEach(function() {
    module('about');

    inject(function($state) {
      state = $state;
    });
  });


  describe("States Maps", function() {

    describe("$state", function() {

      it("should be define", function() {
        expect(state).toBeDefined();
      });

    });

    describe("about state", function() {

      var config;

      it("should be define", function() {
        // arrange
        config = state.get('about');

        // assertions
        expect(config).toBeDefined();
      });

      it("should map to url \'/about\'", function() {
        expect(config.url).toEqual('/about');
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

          it("should map to templateUrl \'app/about/template.html\'", function() {
            expect(master.templateUrl).toBeDefined('app/about/template.html');
          });

          it("should map to controller AboutCtrl", function() {
            expect(master.controller).toEqual('AboutCtrl');
          });

          it("should map to controllerAs vm", function() {
            expect(master.controllerAs).toEqual('vm');
          });

        });


      });

    });

  }); //--- end: States Map


});
