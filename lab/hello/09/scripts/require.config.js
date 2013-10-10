require({

  // libraries dependencies with fallback
  paths: {

    angular: [ 
      'http://code.angularjs.org/1.1.5/angular.min',
      '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.min'
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