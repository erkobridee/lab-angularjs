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

      angularRoute: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular-route.min'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular-route.min'
      ],

      angularResource: [
        '/cdn/ajax/libs/angular.js/1.5.10/angular-resource.min'
        // '/cdn/ajax/libs/angular.js/1.6.1/angular-resource.min'
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

    deps: [
      './ng.app',

      'angularMocks',

      '../tests/unit/require.load'
    ],

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log( 'onRequireReadyHandler' );

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };

    $( document ).ready(function() {
        console.log( "document ready!" );
        jasmineEnv.execute();
    });
  }

})();
