(function() {
  'use strict';

  require.config({

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
      ],

      angular: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular.min'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular.min'
      ],

      angularResource: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular-resource.min'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular-resource.min'
      ],

      angularMocks: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular-mocks'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular-mocks'
      ],

      uiRouter: [
        '/cdn/ajax/libs/angular-ui/ui-router/0.2.15/angular-ui-router.min'
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

      'angularResource': {
        deps: ['angular']
      },

      'uiRouter': {
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
