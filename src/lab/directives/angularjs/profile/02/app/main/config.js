(function() {
  'use strict';

  angular.module( 'app' ).config( configureLocation );

  //---

  configureLocation.$inject = ['$locationProvider'];

  function configureLocation( $locationProvider ) {

      // remove the ! added by angular v1.6.1
      $locationProvider.hashPrefix('');

  }

})();
