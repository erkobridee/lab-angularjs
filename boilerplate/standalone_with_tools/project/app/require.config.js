require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '../vendor/js/jquery-1.10.2.min'
    ],

    bootstrap: [
      '../vendor/bootstrap/js/bootstrap-3.0.1.min'
    ],

    angular: [
      '../vendor/angular/angular-1.1.5.min'
    ],

    angular_resource: [
      '../vendor/angular/angular-resource-1.1.5.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'bootstrap': {
      deps: ['jquery']
    },

    'angular': {
      deps: ['bootstrap']
    },

    'angular_resource': {
      deps: ['angular']
    },

    'main/module': {
      deps: ['angular', 'angular_resource']
    },

    'home/controller': {
      deps: ['main/module']
    },

    'about/controller': {
      deps: ['main/module']
    },

    'help/controller': {
      deps: ['main/module']
    },

    'main/routes': {
      deps: [
        'home/controller',
        'about/controller',
        'help/controller'
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