(function() {
  'use strict';

  angular
    .module('app')
    .directive('applayout', applayout);

    //---

    // https://docs.angularjs.org/guide/directive
    // https://docs.angularjs.org/api/ng/service/$compile

    applayout.$inject = ['MultiTranscludeService'];
    function applayout(multitransclude) {

      var scope = {};

      var directive = {
        restrict: 'E',
        scope: scope,
        transclude: true,
        link: linkingFn,
        template: templateFn
      };

      //---

      function linkingFn(scope, el, attr, ctrl, transcludeFn) {
        multitransclude.transclude(el, transcludeFn);
      }

      //---

      function templateFn(tElement, tAttrs) {
        return [
          '<div id="site">',
            '<header transclude-id="header">',
              '<h1>Header Content</h1>',
            '</header>',
            '<nav transclude-id="menu">',
              '<h2>Menu Content</h2>',
            '</nav>',
            '<main transclude-id="main">',
              '<h3>Body Content</h3>',
            '</main>',
            '<footer transclude-id="footer">',
              '<h4>Footer Content</h4>',
            '</footer>',
          '</div>'
        ].join('');
      }

      //---

      return directive;

    }

})();
