require.config({

  paths: {

    angular: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular.min'
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

  deps: ['./ng.app']

});
