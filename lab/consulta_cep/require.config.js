require({

  // libraries dependencies (fallback support)
  paths: {

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

  deps: ['./ng.app']

});
