require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
      '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
      '/cdn/ajax/libs/jquery/2.1.1/jquery.min'
    ],

    // http://code.angularjs.org/1.3.4/
    angular: [
      '/cdn/ajax/libs/angular.js/1.3.4/angular.min'
    ],

    angular_resource: [
      '/cdn/ajax/libs/angular.js/1.3.4/angular-resource.min'
    ],

    angular_ui_router: [
      '/cdn/ajax/libs/angular-ui/ui-router/0.2.11/angular-ui-router.min'
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

    'main/routes': {
      deps: [
        'controllers/home',
        'controllers/about'
      ]
    },

    'main/start': {
      deps: [
        'main/routes'
      ]
    }

  }

},

['require'], function(require) {

  console.log('calling main/start.js');

  require(['main/start']);

});
