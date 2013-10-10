(function() {
  'use strict';

  //---

  var MOCK_FLAG = true;

  var ANGULAR_VERSION = '1.0.7';

  //---

  // require object config
  var config = {

    // libraries dependencies with fallback 
    paths: {

      'angular': [ 
        '//ajax.googleapis.com/ajax/libs/angularjs/'+ANGULAR_VERSION+'/angular.min',
        '//cdnjs.cloudflare.com/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular.min',
        'http://code.angularjs.org/'+ANGULAR_VERSION+'/angular.min'      
      ]

    },

    // define js scripts dependencies 
    shim: {

      'main/module': { 
        deps: ['angular'] 
      },

      'controllers/UserCtrl': { 
        deps: ['main/module'] 
      },

      'main/start': { 
        deps: [
          'controllers/UserCtrl'
        ] 
      }

    }

  };
  
  //---

  if(MOCK_FLAG) {

    //------------------
    // add more libraries dependencies

    config.paths['angular-mocks'] = [
      'http://code.angularjs.org/'+ANGULAR_VERSION+'/angular-mocks'
    ];

    config.paths['angular-mocks-backend'] = [
      '../libs/angular-mocks-backend'
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

    config.shim['main/start'].deps.push('resources/mock/allow-jsonp-pass-external');
    config.shim['main/start'].deps.push('resources/mock/UserMock');

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