require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '/cdn/ajax/libs/jquery/2.1.3/jquery.min'
    ],

    // http://code.angularjs.org/1.5.10/
    angular: [
      '/cdn/ajax/libs/angular.js/1.5.10/angular.min'
      // '/cdn/ajax/libs/angular.js/1.6.1/angular.min'
    ],

    angular_route: [
      '/cdn/ajax/libs/angular.js/1.5.10/angular-route.min'
      // '/cdn/ajax/libs/angular.js/1.6.1/angular-route.min'
    ],

    angular_resource: [
      '/cdn/ajax/libs/angular.js/1.5.10/angular-resource.min'
      // '/cdn/ajax/libs/angular.js/1.6.1/angular-resource.min'
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
