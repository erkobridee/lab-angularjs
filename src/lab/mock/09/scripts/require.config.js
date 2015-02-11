(function() {
  'use strict';

  //---

  var MOCK_FLAG = true;

  // http://code.angularjs.org/1.3.13/
  var ANGULAR_VERSION = '1.3.13';

  //---

  // require object config
  var config = {

    // libraries dependencies with fallback
    paths: {

      'angular': [
        '/cdn/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular.min'
      ],

      'angular_route': [
        '/cdn/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular-route.min'
      ],

      'angular_resource': [
        '/cdn/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular-resource.min'
      ]

    },

    // define js scripts dependencies
    shim: {

      'angular_resource': {
        deps: ['angular']
      },

      'angular_route': {
        deps: ['angular']
      },

      'main/module': {
        deps: [
          'angular_route',
          'angular_resource'
        ]
      },

      'resources/GitHubUserResource': {
        deps: ['main/module']
      },

      'controllers/GitHubUserCtrl': {
        deps: [
          'main/module',
          'resources/GitHubUserResource'
        ]
      },

      'controllers/AboutCtrl': {
        deps: ['main/module']
      },

      'controllers/HomeCtrl': {
        deps: ['main/module']
      },

      'controllers/UserCtrl': {
        deps: ['main/module']
      },

      'main/routes': {
        deps: [
          'controllers/GitHubUserCtrl',
          'controllers/AboutCtrl',
          'controllers/HomeCtrl',
          'controllers/UserCtrl'
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

  if(MOCK_FLAG) {

    //------------------
    // add more libraries dependencies

    config.paths['angular-mocks'] = [
      '/cdn/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular-mocks'
    ];

    config.paths['angular-mocks-backend'] = [
      '../vendor/angular-mocks-backend'
    ];

    config.paths['main/module'] = [
      'main/module.mock'
    ];

    //------------------
    // add more shim configs

    config.shim['angular-mocks'] = {
      deps: ['angular']
    };

    config.shim['angular-mocks-backend'] = {
      deps: ['angular', 'angular-mocks']
    };

    config.shim['resources/mock/allow-pass-external'] = {
      deps: ['angular-mocks-backend']
    };

    config.shim['resources/mock/UserMock'] = {
      deps: ['angular-mocks-backend']
    };

    config.shim['resources/mock/GitHubUserResourceMock'] = {
      deps: ['angular-mocks-backend']
    };

    config.shim['main/module'].deps.push('angular-mocks-backend');

    var mainStartDeps = config.shim['main/start'].deps;
    config.shim['main/start'].deps = mainStartDeps.concat([
      'resources/mock/allow-pass-external',
      'resources/mock/UserMock',
      'resources/mock/GitHubUserResourceMock'
    ]);

  }

  console.log(config);

  //---

  require(config,

    ['require'],

  function(require) {

    console.log('calling main/start.js');

    require(['main/start']);

  });

})();
