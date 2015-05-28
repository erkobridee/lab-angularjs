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

    angular_resource: [
      '/cdn/ajax/libs/angular.js/1.4.0/angular-resource.min'
    ],

    angular_ui_router: [
      '/cdn/ajax/libs/angular-ui/ui-router/0.2.15/angular-ui-router.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      deps: ['jquery']
    },

    'angular_resource': {
      deps: ['angular']
    },

    'angular_ui_router': {
      deps: ['angular']
    },

    'main/module': {
      deps: [
        'angular_ui_router',
        'angular_resource'
      ]
    },

    'controllers/home': {
      deps: ['main/module']
    },

    'controllers/about': {
      deps: ['main/module']
    },

    'main/states': {
      deps: [
        'controllers/home',
        'controllers/about'
      ]
    },

    'main/start': {
      deps: [
        'main/states'
      ]
    }

  }

},

['require'], function(require) {

  console.log('calling main/start.js');

  require(['main/start']);

});
