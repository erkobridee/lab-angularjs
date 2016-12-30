require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
    ],

    // http://code.angularjs.org/1.6.1/
    angular: [
      '/cdn/ajax/libs/angular.js/1.6.1/angular.min'
    ],

    angular_resource: [
      '/cdn/ajax/libs/angular.js/1.6.1/angular-resource.min'
    ],

    angular_ui_router: [
      '/cdn/ajax/libs/angular-ui/ui-router/0.3.2/angular-ui-router.min'
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
