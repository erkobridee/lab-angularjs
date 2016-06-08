require({

  // libraries dependencies with fallback
  paths: {

    angular: [
      //'http://code.angularjs.org/1.5.6/angular.min',
      '/cdn/ajax/libs/angular.js/1.5.6/angular.min'
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
