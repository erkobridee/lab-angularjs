(function(angular) {
  'use strict';


  //--- Custom Error

  var LibError = (function() {
    var ClassDef = function(message) {
      this.name = 'Library Unavailable Error';
      this.message = message;
    };

    ClassDef.prototype = new Error();

    return ClassDef;
  })();


  //--- Check

    // angular
  if(!angular) throw new LibError('AngularJS');

    // angular mocks namespace
  if(!angular.mock) throw new LibError('AngularJS Mocks (angular-mocks.js)');


  //--- Backend mock support 

    // add to angular-mocks namespace
  angular.mock.backend = (function() {
    
    var regexpUrl = function(regexp) {
      return {
        test: function(url) {
          this.matches = url.match(regexp);
          return this.matches && this.matches.length > 0;
        }
      };
    };


    //--- Singleton class definition : used to angular service

    var instance;

    var ClassDef = function() {
      if ( instance )
        return instance;
      instance = this;
    };

    ClassDef.prototype.config = function(angular, httpBackend) {
      configAllow(httpBackend);
      configResources(angular, httpBackend);
    };


    var configAllow = function(httpBackend) {      
      // Allow get html to load templates
      httpBackend.when('GET', regexpUrl(/.html$/)).passThrough();
    };

    //--- mocked resources

    var resources = [];

    ClassDef.addResource = function(resource) {
      if(resource) resources.push(resource);
    };

    var configResources = function(angular, httpBackend) {
      var i = (resources.length - 1);
      
      while(i > -1) {
        resources[i--](angular, httpBackend, regexpUrl);
      }

    };

    //---

    return ClassDef;

  })();


  //--- Global Configs

  var MODULE_NAME = 'ngMockBackend';

  var RUN_LOOP_TIMEOUT = 500;

  //--- Module Definition

  var ngMockBackend = angular.module( MODULE_NAME, [] );

  //---

  ngMockBackend.service('ngMockBackendService', angular.mock.backend);

  //---

  // provider

    // You can also just use provide to blanket replace $httpBackend 
    // with the mock
  ngMockBackend.config(

    ['$provide', 

  function($provide) {

    // Decorate by passing in the constructor for mock $httpBackend
    $provide.decorator('$httpBackend', createHttpBackendMock);

  }]);

  //---

  // run

    // Mark urls that match regexp as a match,
    // you can pass this as the url argument to $httpBackend.[when|expect]
  ngMockBackend.run(

    ['$httpBackend', '$timeout', 'ngMockBackendService',

  function($httpBackend, $timeout, service) {

    service.config(angular, $httpBackend);

    //---

    // A "run loop" of sorts to get httpBackend to 
    // issue responses and trigger the client code's callbacks
    var flushBackend = function() {
      try {
        $httpBackend.flush();
      } catch (err) {
        // ignore that there's nothing to flush
      }
      $timeout(flushBackend, RUN_LOOP_TIMEOUT);
    };
    $timeout(flushBackend, RUN_LOOP_TIMEOUT);

  }]);

})(window.angular);