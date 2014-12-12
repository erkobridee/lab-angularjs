(function() {
  'use strict';

  angular.module( 'app' ).config( configureRoutes );

  //---

  configureRoutes.$inject = ['$routeProvider' ];

  function configureRoutes( $routeProvider ) {

    $routeProvider
      .when( '/404', { templateUrl: 'app/404/template.html' } )
      .otherwise('/404');

  }

})();
