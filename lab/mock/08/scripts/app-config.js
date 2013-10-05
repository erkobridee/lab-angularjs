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

      'app-main': { 
        deps: ['angular'] 
      },

      'controllers/UserCtrl': { 
        deps: ['app-main'] 
      },

      'app-start': { 
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
      'mock/angular-mocks-backend'
    ];

    config.paths['app-main'] = [
      'app-mock'
    ];

    //------------------
    // add more shim configs

    config.shim['angular-mocks'] = {
      deps: ['angular']
    };

    config.shim['angular-mocks-backend'] = {
      deps: ['angular', 'angular-mocks']
    };

    config.shim['mock/resources/allow-jsonp-pass-external'] = {
      deps: ['angular-mocks-backend']
    };

    config.shim['mock/resources/UserMock'] = {
      deps: ['angular-mocks-backend']
    };

    config.shim['app-main'].deps.push('angular-mocks-backend');

    config.shim['app-start'].deps.push('mock/resources/allow-jsonp-pass-external');
    config.shim['app-start'].deps.push('mock/resources/UserMock');

  }

  console.log(config);

  //---

  require(config,

    ['require'],

  function(require) {

    console.log('calling app-start.js');

    require(['app-start']);

  });

})();