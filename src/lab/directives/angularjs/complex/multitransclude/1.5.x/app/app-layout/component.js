(function() {
  'use strict';

  // https://toddmotto.com/exploring-the-angular-1-5-component-method/
  // https://code.angularjs.org/1.6.4/docs/guide/component

  function templateFn($element, $attrs) {
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

  var appLayout = {
    transclude: {
      'headerSlot': '?appHeader',
      'menuSlot': '?appMenu',
      'mainSlot': '?appMain',
      'footerSlot': '?appFooter'
    },
    template: templateFn
  };

  //---

  angular
    .module('app')
    .component('appLayout', appLayout);

})();
