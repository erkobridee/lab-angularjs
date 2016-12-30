require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
    ],

    // http://code.angularjs.org/1.6.1/
    angular: [
      '/cdn/ajax/libs/angular.js/1.6.1/angular.min'
    ],

    angularRoute: [
      '/cdn/ajax/libs/angular.js/1.6.1/angular-route.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.6.1/angular-resource.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },

    'angularRoute': {
      deps: ['angular']
    },

    'angularResource': {
      deps: ['angular']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./main/bootstrap']

});
