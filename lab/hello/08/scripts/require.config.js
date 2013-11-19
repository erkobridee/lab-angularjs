require({

  // libraries dependencies with fallback
  paths: {

    angular: [ 
      '/vendor/angular/1.2.1/angular.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'app-module': { 
      deps: ['angular'] 
    },

    'controllers': { 
      deps: ['app-module'] 
    },

    'app-start': { 
      deps: [ 
        'controllers'
      ] 
    }

  },

  waitSeconds: 2

},

  ['require'],

function(require) {

  console.log('calling app-start.js');

  require(['app-start']);

});