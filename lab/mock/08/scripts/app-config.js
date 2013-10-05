(function() {
  'use strict';

  //---

  require({

    // libraries dependencies with fallback
    paths: {

      'angular': [ 
        '//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min',
        '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.0.7/angular.min',
        'http://code.angularjs.org/1.0.7/angular.min'      
      ],

      'angular-mocks': [
        'http://code.angularjs.org/1.0.7/angular-mocks'
      ],

      'angular-mocks-backend': [
        'mock/angular-mocks-backend'
      ],

      'app-main': [
        'app-mock'
      ]

    },

    // define js scripts dependencies
    shim: {

      'angular-mocks': {
        deps: ['angular']
      },

      'angular-mocks-backend': {
        deps: ['angular', 'angular-mocks']
      },

      'mock/resources/allow-jsonp-pass-external': {
        deps: ['angular-mocks-backend']
      },

      'mock/resources/UserMock': {
        deps: ['angular-mocks-backend']
      },

      'app-main': { 
        deps: ['angular', 'angular-mocks-backend'] 
      },

      'controllers/UserCtrl': { 
        deps: ['app-main'] 
      },

      'app-start': { 
        deps: [
          'mock/resources/allow-jsonp-pass-external',
          'mock/resources/UserMock',
          'controllers/UserCtrl'
        ] 
      }

    }

  },

    ['require'],

  function(require) {

    console.log('calling app-start.js');

    require(['app-start']);

  });

})();