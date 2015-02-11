// provider

  // You can also just use provide to blanket replace $httpBackend
  // with the mock
angular.module('app.mock').config(

  ['$provide',

function($provide) {

  var obj = new angular.mock.$HttpBackendProvider(),
      createHttpBackendMock = obj.$get[ obj.$get.length - 1 ];

  // Decorate by passing in the constructor for mock $httpBackend
  $provide.decorator('$httpBackend', createHttpBackendMock);

}]);


//--- === ---

// service support
angular.mock.service = (function() {
  "use strict";

  //---

  var regexpUrl = function(regexp) {
    return {
      test: function(url) {
        this.matches = url.match(regexp);
        return this.matches && this.matches.length > 0;
      }
    };
  };

  //---

  var instance;

  var ClassDef = function() {
    if ( instance )
      return instance;
    instance = this;
  };

  ClassDef.prototype.config = function(angular, httpBackend) {
    configJSONP(httpBackend);
    configResources(angular, httpBackend);
  };

  //---

  var configJSONP = function(httpBackend) {
    // Allow JSONP to pass to external services (ie Solr)
    httpBackend.when('JSONP', regexpUrl(/http:\/\/.*/)).passThrough();
  };

  //---

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

angular.module('app.mock').service('MockService', angular.mock.service);

//--- === ---
