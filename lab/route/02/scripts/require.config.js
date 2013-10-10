require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min',
      '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min'
    ],

    angular: [ 
      'http://code.angularjs.org/1.1.5/angular.min',
      '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.min'
    ],

    angular_resource: [
      'http://code.angularjs.org/1.1.5/angular-resource.min',
      '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular-resource.min'
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

    'main/module': { 
      deps: ['angular', 'angular_resource'] 
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
