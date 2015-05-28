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

    angular_ui_router: [
      '/cdn/ajax/libs/angular-ui/ui-router/0.2.15/angular-ui-router.min'
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

    'angular_ui_router': {
      deps: ['angular']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./main/ng.bootstrap']

});
