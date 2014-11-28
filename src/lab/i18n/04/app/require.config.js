require.config({

  paths: {

    angular: [
      '/cdn/ajax/libs/angular.js/1.3.4/angular.min'
    ],

    angularRoute: [
      '/cdn/ajax/libs/angular.js/1.3.4/angular-route.min'
    ],

    angularTranslate: [
      '/cdn/ajax/libs/angular-translate/2.0.1/angular-translate.min'
    ],

    angularTranslateLoaderPartial: [
      '/cdn/ajax/libs/angular-translate-loader-partial/2.4.2/angular-translate-loader-partial.min'
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
    },

    'angularTranslateLoaderPartial': {
      deps: ['angularTranslate']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
