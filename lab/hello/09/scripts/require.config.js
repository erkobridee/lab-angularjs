require({

  // libraries dependencies with fallback
  paths: {

    angular: [ 
      // http://code.angularjs.org/1.2.1/angular.min
      '/cdn/ajax/libs/angular.js/1.2.1/angular.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'main/module': { 
      deps: ['angular'] 
    },

    'controllers': { 
      deps: ['main/module'] 
    },

    'main/start': { 
      deps: [ 
        'controllers'
      ] 
    }

  }

},

  ['require'],

function(require) {

  console.log('calling main/start.js');

  require(['main/start']);

});