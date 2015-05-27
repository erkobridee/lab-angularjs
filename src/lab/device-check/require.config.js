require({

  // libraries dependencies (fallback support)
  paths: {

    jquery: [
      '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
    ],

    angular: [
      '/cdn/ajax/libs/angular.js/1.4.0/angular.min'
    ],

    angularRoute: [
      '/cdn/ajax/libs/angular.js/1.4.0/angular-route.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.4.0/angular-resource.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      exports: 'angular',
      deps: ['jquery']
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

  deps: ['./ng.app']

});
