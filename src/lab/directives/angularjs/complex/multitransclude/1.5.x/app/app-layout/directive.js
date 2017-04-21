(function() {
  'use strict';

  angular
    .module('app')
    .directive('appLayout', appLayout);

    //---

    // https://docs.angularjs.org/guide/directive
    // https://docs.angularjs.org/api/ng/service/$compile

    function appLayout() {

      var scope = {};

      var directive = {
        restrict: 'E',
        scope: scope,
        transclude: {
          'headerSlot': '?appHeader',
          'menuSlot': '?appMenu',
          'mainSlot': '?appMain',
          'footerSlot': '?appFooter'
        },
        // replace: true,
        template: templateFn
      };

      //---

      function templateFn(tElement, tAttrs) {
        return [
          '<div id="site">',
            '<header ng-transclude="headerSlot">',
              '<h1>Header Content</h1>',
            '</header>',
            '<nav ng-transclude="menuSlot">',
              '<h2>Menu Content</h2>',
            '</nav>',
            '<main ng-transclude="mainSlot">',
              '<h3>Body Content</h3>',
            '</main>',
            '<footer ng-transclude="footerSlot">',
              '<h4>Footer Content</h4>',
            '</footer>',
          '</div>'
        ].join('');
      }

      //---

      return directive;

    }

})();
