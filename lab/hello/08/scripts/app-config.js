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

    'app-main': { 
      deps: ['angular'] 
    },

    'controllers': { 
      deps: ['app-main'] 
    },

    'app-start': { 
      deps: [ 
        'app-main', 
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