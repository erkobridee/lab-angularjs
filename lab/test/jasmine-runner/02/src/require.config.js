(function() {
  'use strict';

  require.config({

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        '/cdn/ajax/libs/jquery/1.11.0/jquery.min'
      ],

      angular: [
        '/cdn/ajax/libs/angular.js/1.2.15/angular.min'
      ],

      angularRoute: [
        '/cdn/ajax/libs/angular.js/1.2.15/angular-route.min'
      ],

      angularResource: [
        '/cdn/ajax/libs/angular.js/1.2.15/angular-resource.min'
      ],

      angularMocks: [
        '/cdn/ajax/libs/angular.js/1.2.15/angular-mocks'
      ]

    },

    // define js scripts dependencies
    shim: {

      'jquery': {
        exports: 'jquery'
      },

      'angular': {
        exports: 'angular',
        deps: ['jquery']
      },

      'angularRoute': {
        deps: ['angular']
      },

      'angularResource': {
        deps: ['angular']
      },

      'angularMocks': {
        deps: ['angular']
      }

    },

    priority: [
      'angular'
    ],

    deps: ['./ng.app'],

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log('go go go...');
  }

})();
