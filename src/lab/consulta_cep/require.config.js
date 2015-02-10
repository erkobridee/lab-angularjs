require({

  // libraries dependencies (fallback support)
  paths: {

    angular: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular.min'
    ],

    angularRoute: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular-route.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular-resource.min'
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
