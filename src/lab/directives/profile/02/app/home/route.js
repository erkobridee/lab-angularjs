(function() {
  'use strict';

  angular.module( 'app' ).config( configureRoutes );

  //---

  configureRoutes.$inject = ['$routeProvider' ];

  function configureRoutes( $routeProvider ) {

    $routeProvider
      .when( '/home', {
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateUrl: 'app/home/template.html'
      })
      .when( '/', { redirectTo: '/home' });

  }

})();
