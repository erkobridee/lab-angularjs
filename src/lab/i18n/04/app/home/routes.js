define(function(require) {
    'use strict';

    var module = require('./module');

    module.config(routeProvider);
    
    routeProvider.$inject = [ '$routeProvider', '$locationProvider' ];

    function routeProvider($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', { redirectTo:'/home' })
          .when(
            '/home', {
              templateUrl: 'app/home/templates/home.html',
              controller: 'HomeCtrl'
            }
        );

        $locationProvider.html5Mode(true);
    }

});
