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
      transclude: true,
      link: linkFunc,
      controller: ProfileController,
      controllerAs: 'vm'
    };

    return directive;

    //---

    function linkFunc( scope, element, attrs, controller,  transclude  ) {

      transclude( scope, transcludeFunc );

      //---

      function transcludeFunc( clone, scope ){
        if(controller.hasPermission( scope.user, scope.permissions ) ) {

          element.replaceWith(clone);

        } else {

          element.remove();

        }

      }

    }

  }

  //---

  ProfileController.$inject = [ 'ProfileFactory' ];

  function ProfileController( ProfileFactory ) {
    var vm = this;

    vm.hasPermission = hasPermission;

    //---

    function hasPermission( user, permissions ) {
      return ProfileFactory.contains( user, permissions );
    }

  }

})();
