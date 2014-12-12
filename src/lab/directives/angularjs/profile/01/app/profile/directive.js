(function() {
  'use strict';

  angular.module( 'app' ).directive( 'profile', Profile );

  //---

  function Profile() {

    var scope = {
      permissions: '@',
      user: '='
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      replace: true,
      compile: compileFunc
    };

    return directive;

    //---

    function compileFunc( element, attrs ) {
      return {
        pre: compileEl
      };

      //---

      function compileEl( scope, element, attrs ){
        if( !(~scope.permissions.indexOf(scope.user)) ) {
          element.remove();
        }

      }

    }

  }

})();
