(function() {
  'use strict';

  angular
    .module('app')
    .directive('matchMedia', matchMedia);

    //---

    // https://docs.angularjs.org/guide/directive
    // https://docs.angularjs.org/api/ng/service/$compile

    // matchMedia.$inject = [];
    function matchMedia() {

      var directive = {
        restrict: 'A',
        link: postLink
      };

      //---

      function postLink(scope, element, attrs) {
        var mql = null,
            mqlListener = null;

        console.log(scope, attrs);

        scope.matchMedia = false;

        if (window.matchMedia) {
          mql = window.matchMedia( '(' + attrs.matchMedia + ')' );
          mqlListener = function mqlListener(mql) {
            scope.matchMedia = mql.matches;

            console.log('matches ' + attrs.matchMedia + ' : ' + mql.matches);

            // prevents it from unnecessarily calling $scope.$apply when the page first runs
            if(!scope.$$phase) {
                // triggers the digest cycle
                scope.$apply();
            }
          };
          mql.addListener(mqlListener);
          mqlListener(mql);
        } else {
          scope.matchMedia = false;
        }

        scope.$on('$destroy', function() {
          if(mql && mqlListener) {
              mql.removeListener(mqlListener);
          }
          mqlListener = null;
          mql = null;
        });
      }

      //---

      return directive;

    }

})();
