(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  function MainCtrl() {
    var vm = this;

    vm.items= [ 'Home', 'Dashboard', 'About' ];
  }

})();
