(function() {
  'use strict';

  angular.module( 'app' ).config( configureRoutes );

  //---

  configureRoutes.$inject = ['$routeProvider' ];

  function configureRoutes( $routeProvider ) {

    $routeProvider
      .when('/about', {
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'app/about/template.html'
      });
  }

})();
