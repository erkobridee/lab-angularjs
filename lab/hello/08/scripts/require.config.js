require({

  // libraries dependencies with fallback
  paths: {

    angular: [ 
      'http://code.angularjs.org/1.0.7/angular.min',
      '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.0.7/angular.min'
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

  }

},

  ['require'],

function(require) {

  console.log('calling app-start.js');

  require(['app-start']);

});