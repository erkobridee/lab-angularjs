(function() {
  'use strict';

  require.config({

    baseUrl: '../../src',

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

    deps: [
      './ng.app',

      'angularMocks',

      './require.unit.load'
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
