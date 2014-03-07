require.config({

  paths: {

    angular: [
      '/cdn/ajax/libs/angular.js/1.2.1/angular.min'
    ],

    angularRoute: [
      '/cdn/ajax/libs/angular.js/1.2.1/angular-route.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.2.1/angular-resource.min'
    ]

  },

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

  deps: ['./main/bootstrap']

});