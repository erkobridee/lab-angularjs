require.config({

  paths: {

    angular: [
      '/cdn/ajax/libs/angular.js/1.2.1/angular.min'
    ]

  },

  shim: {
    'angular': {
      exports: 'angular'
    }
  },

  priority: [
    'angular'
  ],

  deps: ['./main/bootstrap']

});