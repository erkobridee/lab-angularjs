require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
    ],

    // http://code.angularjs.org/1.3.13/
    angular: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular-resource.min'
    ],

    bootstrap: [
      '/cdn/ajax/libs/bootstrap/3.3.2/js/bootstrap.min'
    ],

    uiBootstrap: [
      '/cdn/ajax/libs/angular-ui/bootstrap/0.12.0/ui-bootstrap-tpls.min'
    ],

    uiRouter: [
      '/cdn/ajax/libs/angular-ui/ui-router/0.2.11/angular-ui-router.min'
    ],

    localForage: [
      '/cdn/ajax/libs/localForage/1.2.2/localforage.min'
    ],

    angularLocalForage: [
      '/cdn/ajax/libs/angular-localforage/1.2.2/angular-localForage.min'
    ],

    html2canvas: [
      '/cdn/ajax/libs/html2canvas/0.5.0-alpha2/html2canvas.min'
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

    'bootstrap': {
      deps: ['jquery']
    },

    'uiBootstrap': {
      deps: ['bootstrap']
    },

    'angularLocalForage': {
      deps: ['angular', 'localForage']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
