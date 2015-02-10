require.config({

  paths: {

    angular: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular.min'
    ],

    angularRoute: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular-route.min'
    ],

    angularTranslate: [
      '/cdn/ajax/libs/angular-translate/2.0.1/angular-translate.min'
    ]

  },

  shim: {

    'angular': {
      exports: 'angular'
    },

    'angularRoute': {
          deps: ['angular']
      },

    'angularTranslate': {
      deps: ['angular']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
