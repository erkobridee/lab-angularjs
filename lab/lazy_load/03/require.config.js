require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
    ],

    // http://code.angularjs.org/1.4.0/
    angular: [
      '/cdn/ajax/libs/angular.js/1.4.0/angular.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.4.0/angular-resource.min'
    ],

    uiRouter: [
      '/cdn/ajax/libs/angular-ui/ui-router/0.2.15/angular-ui-router.min'
    ],

    bootstrap: [
      '/cdn/ajax/libs/bootstrap/3.3.2/js/bootstrap.min'
    ],

    holder: [
      '/cdn/ajax/libs/holder/2.4.1/holder.min'
    ],

    ocLazyLoad: [
      '/cdn/ajax/libs/ocLazyLoad/1.0.0-beta.2/ocLazyLoad.require.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },

    'angularResource': {
      deps: ['angular']
    },

    'uiRouter': {
      deps: ['angular']
    },

    'ocLazyLoad': {
      deps: ['angular']
    },

    'bootstrap': {
      deps: ['jquery']
    },

    'holder': {
      exports: 'Holder'
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
