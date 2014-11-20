describe('ui.router: \'dep1\'', function() {

  var state;

  beforeEach(function() {
    module('dep1');

    inject(function($state) {
      state = $state;
    });
  });

  describe("States Map", function() {

    var config;

    it("should be defined", function() {
      // arrange
      config = state.get('dep1');

      // assertions
      expect(config).toBeDefined();
    });

    describe("about state", function() {

      var config;

      it("should be define", function() {
        // arrange
        config = state.get('dep1');

        // assertions
        expect(config).toBeDefined();
      });

      it("should map to url \'/dep1\'", function() {
        expect(config.url).toEqual('/dep1');
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

          it("should map to templateUrl \'app/dep1/template.html\'", function() {
            expect(master.templateUrl).toBeDefined('app/dep1/template.html');
          });

          it("should map to controller Dep1Ctrl", function() {
            expect(master.controller).toEqual('Dep1Ctrl');
          });

          it("should map to controllerAs vm", function() {
            expect(master.controllerAs).toEqual('vm');
          });

        });


      });

    });

  }); //--- end: States Map

});
