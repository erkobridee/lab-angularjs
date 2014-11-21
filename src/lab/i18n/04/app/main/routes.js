define(function(require) {
    'use strict';

    var module = require('./module');

    module.config(routesConfig);
    
    routesConfig.$inject = [ '$routeProvider', '$locationProvider' ];    
    
    function routesConfig($routeProvider, $locationProvider) {

        $routeProvider
            .when('/404', { templateUrl: 'app/main/templates/404.html' })
            .otherwise({ redirectTo:'/404' });

            $locationProvider.html5Mode(true);
    }

});
