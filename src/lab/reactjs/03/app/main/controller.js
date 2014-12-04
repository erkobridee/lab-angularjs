(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  function MainCtrl() {
    this.items= [ 'Home', 'Dashboard', 'About' ];
  }

})();
