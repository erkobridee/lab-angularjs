(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [  ];

  function MainCtrl( ) {
    var vm = this;

    var user = {
      profile: 'ADMIN'
    };

    var profiles = [ 'USER', 'ADMIN' ];

    //---

    vm.user = user;
    vm.profiles = profiles;

  }

})();
