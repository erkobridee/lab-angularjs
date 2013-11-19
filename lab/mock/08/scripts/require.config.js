(function() {
  'use strict';

  //---

  var MOCK_FLAG = true;

  // http://code.angularjs.org/1.2.1/
  var ANGULAR_VERSION = '1.2.1';

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
      ]

    },

    // define js scripts dependencies 
    shim: {

      'angular_route': {
        deps: ['angular'] 
      },

      'main/module': { 
        deps: ['angular_route'] 
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
      'libs/angular-mocks-backend'
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

    config.shim['resources/mock/allow-jsonp-pass-external'] = {
      deps: ['angular-mocks-backend']
    };

    config.shim['resources/mock/UserMock'] = {
      deps: ['angular-mocks-backend']
    };

    config.shim['main/module'].deps.push('angular-mocks-backend');
    
    var mainStartDeps = config.shim['main/start'].deps;
    config.shim['main/start'].deps = mainStartDeps.concat([
      'resources/mock/allow-jsonp-pass-external',
      'resources/mock/UserMock'
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