require({

  // libraries dependencies with fallback
  paths: {

    angular: [ 
      'http://code.angularjs.org/1.1.5/angular.min',
      '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.min',
      '/scripts/libs/angular.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'app': { 
      deps: ['angular'] 
    },

    'controllers': { 
      deps: ['app'] 
    },

    'start_app': { 
      deps: [ 
        'app', 
        'controllers'
      ] 
    }

  }

},

  ['require'],

function(require) {

  console.log('calling start_app.js');

  require(['start_app']);

});