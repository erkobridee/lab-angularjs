(function() {
  'use strict';

  angular
    .module('app')
    .directive('checkswap', checkswap);

    //---

    // https://docs.angularjs.org/guide/directive
    // https://docs.angularjs.org/api/ng/service/$compile

    // checkswap.$inject = [];
    function checkswap() {

      var directive = {
        restrict: 'A',
        link: postLink
      };

      //---

      function postLink(scope, element, attrs) {
        console.log(scope, attrs);

        scope.swap = {
          matches: false
        };

        if (window.matchMedia) {
          var mql = window.matchMedia( '(' + attrs.checkswap + ')' );
          var mqlListener = function mqlListener(mql) {
            scope.swap.matches = mql.matches;

            console.log('matches ' + attrs.checkswap + ' : ' + mql.matches);

            // prevents it from unnecessarily calling $scope.$apply when the page first runs
            if(!scope.$$phase) {
                // triggers the digest cycle
                scope.$apply();
            }
          };
          mql.addListener(mqlListener);
          mqlListener(mql);

          scope.$on('$destroy', function() {
            mql.removeListener(mqlListener);
            mql = null;
          });
        } else {
          scope.swap.matches = false;
        }
      }

      //---

      return directive;

    }

})();
