(function() {
  'use strict';

  //---

  // require object config
  var config = {

    // libraries dependencies with fallback 
    paths: {

      'angular': [ 
        '//ajax.googleapis.com/ajax/libs/angularjs/'+GLOBAL_APP.str_ANGULAR_VERSION+'/angular.min',
        '//cdnjs.cloudflare.com/ajax/libs/angular.js/'+GLOBAL_APP.str_ANGULAR_VERSION+'/angular.min',
        'http://code.angularjs.org/'+GLOBAL_APP.str_ANGULAR_VERSION+'/angular.min'
      ],

      'angular_resource': [
        '//cdnjs.cloudflare.com/ajax/libs/angular.js/'+GLOBAL_APP.str_ANGULAR_VERSION+'/angular-resource.min',
        'http://code.angularjs.org/'+GLOBAL_APP.str_ANGULAR_VERSION+'/angular-resource.min'
      ]

    },

    // define js scripts dependencies 
    shim: {

      'angular_resource': {
        deps: ['angular'] 
      },

      'main/module': { 
        deps: ['angular', 'angular_resource'] 
      },

      'about/controller': {
        deps: ['main/module']
      },

      'github/users/resource': {
        deps: ['main/module']
      },

      'github/users/controller': {
        deps: ['main/module', 'github/users/resource']
      },

      'home/controller': {
        deps: ['main/module'] 
      },

      'users/resource': {
        deps: ['main/module'] 
      },

      'users/controller': {
        deps: ['main/module', 'users/resource']
      },

      'main/routes': {
        deps: [
          'about/controller',
          'github/users/controller',
          'home/controller',
          'users/controller'
        ]
      },

      'main/start': { 
        deps: [
          'main/routes'
        ] 
      }

    }

  };

  //---

require(config,

  ['require'],

function(require) {

  console.log('require load app config');

  // app only
  //require(['main/start']);
  
  // app with mock
  require([
    'main/start', // app
    'require.mock.config' // mock    
  ]);

});

})();