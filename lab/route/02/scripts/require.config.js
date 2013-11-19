require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
      '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.1/jquery.min'      
    ],

    angular: [ 
      '/vendor/angular/1.2.1/angular.min'
    ],

    angular_route: [
      '/vendor/angular/1.2.1/angular-route.min'
    ],

    angular_resource: [
      '/vendor/angular/1.2.1/angular-resource.min'
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
        'angular', 
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
