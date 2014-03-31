(function() {
  'use strict';

  //---

  // require object config
  var config = {

    // libraries dependencies with fallback
    paths: {

      'angular-mocks': [
        '/cdn/ajax/libs/angular.js/'+GLOBAL_APP.ANGULAR_VERSION+'/angular-mocks'
      ],

      'angular-mocks-backend': [
        '../vendor/js/angular-mocks-backend'
      ]

    },

    // define js scripts dependencies
    shim: {

      'angular-mocks': {
        deps: [
          'angular_route',
          'angular_resource'
        ]
      },

      'angular-mocks-backend': {
        deps: ['angular-mocks']
      },

      //--- @begin: mock resources

      'main/mock/allow-pass-jsonp': {
        deps: ['angular-mocks-backend']
      },

      'users/resource.mock': {
        deps: ['angular-mocks-backend']
      },

      'github/users/resource.mock': {
        deps: ['angular-mocks-backend']
      },

      //--- @end: mock resources


      // load mock resources
      'main/mock/load': {
        deps: [
          'main/mock/allow-pass-jsonp',
          'users/resource.mock',
          'github/users/resource.mock'
        ]
      }

    }

  };

  console.log('require mock config object');
  console.log(config);

  //---

require(config,

  ['require'],

function(require) {

  console.log('require load mock config');

  console.log(GLOBAL_APP.moduleDeps);

  // update modules dep array
  GLOBAL_APP.moduleDeps = GLOBAL_APP.moduleDeps.concat(['ngMockBackend']);

  console.log(GLOBAL_APP.moduleDeps);

  require(['main/mock/load']);

});

})();
