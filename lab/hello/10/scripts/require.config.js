require.config({

  paths: {

    angular: [
      '/cdn/ajax/libs/angular.js/1.5.6/angular.min'
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

  deps: ['./main/ng.bootstrap']

});
