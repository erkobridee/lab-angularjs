require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
      '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min',
      '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
    ],

    // http://code.angularjs.org/1.3.13/
    angular: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular.min'
    ],

    angular_route: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular-route.min'
    ],

    angular_resource: [
      '/cdn/ajax/libs/angular.js/1.3.13/angular-resource.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      deps: ['jquery']
    },

    'angular_route': {
      deps: ['angular']
    },

    'angular_resource': {
      deps: ['angular']
    },

    'main/module': {
      deps: [
        'angular_route',
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
