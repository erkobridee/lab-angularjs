(function() {
  'use strict';

  function routesConfig($routeProvider) {
    $routeProvider
      .when(
        '/',
        {
          templateUrl: 'scripts/bookmarks/template.html',
          controller: 'Bookmarks',
          controllerAs: 'bookmarks'
        }
      );
  }

  routesConfig.$inject = ['$routeProvider'];

  angular
    .module('app')
    .config(routesConfig);

})();
