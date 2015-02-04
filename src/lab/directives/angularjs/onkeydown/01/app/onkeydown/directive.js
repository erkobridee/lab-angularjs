(function() {
  'use strict';

  angular.module( 'app' ).directive('onkeydown', onkeydown);

  //---

  function onkeydown() {

    var scope = {
      code: '=',
      handler: '&'
    };

    var directive = {
      restrict: 'E',
      scope: scope,
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc(scope, element, attrs) {
      window.document.onkeydown = function(e) {
        if (!e){ e = event; }
        if (e.keyCode == scope.code) {
          scope.handler();
        }
      };
    }

  }

})();
