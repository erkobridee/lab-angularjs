(function() {
  'use strict';

  require.config({

    baseUrl: '../../src',

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
      ],

      angular: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular.min'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular.min'
      ],

      /*
      angularRoute: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular-route.min'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular-route.min'
      ],
      */

      angularResource: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular-resource.min'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular-resource.min'
      ],

      uiRouter: [
        '/cdn/ajax/libs/angular-ui/ui-router/0.2.15/angular-ui-router.min'
      ],


      angularMocks: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular-mocks'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular-mocks'
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

      /*
      'angularRoute': {
        deps: ['angular']
      },
      */

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

    deps: [
      './ng.app',

      'angularMocks',

      './require.unit.load'
    ],

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log( 'onRequireReadyHandler' );

    $( document ).ready(function() {
        console.log( "document ready!" );

        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();

    });
  }

})();
