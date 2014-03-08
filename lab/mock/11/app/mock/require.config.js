require({

  // libraries dependencies with fallback
  paths: {

    // http://code.angularjs.org/1.2.1/
    angularMocks: [
      '/cdn/ajax/libs/angular.js/1.2.1/angular-mocks'
    ],

    angularMocksBackend: [
      '../vendor/js/angular-mocks-backend' // base path: /app
    ]

  },

  // define js scripts dependencies
  shim: {

    'angularMocks': {
      deps: ['angular']
    },

    'angularMocksBackend': {
      deps: ['angularMocks']
    }
  },

  priority: [
    'angularMocks'
  ]

});