// provider

  // You can also just use provide to blanket replace $httpBackend 
  // with the mock
angular.module('app').config(

  ['$provide', 

function($provide) {

  // Decorate by passing in the constructor for mock $httpBackend
  $provide.decorator('$httpBackend', createHttpBackendMock);

}]);


//--- === ---

var UserMock = (function() {

  // Some statefullness
  var users = {
    0: {userName: 'mock backend user', userId: 0}
  };
  var userId = 1;

  //---

  var angular, httpBackend, regexpUrl;

  //---

  function Config( _angular_, _httpBackend_, _regexpUrl_ ) {
    angular = _angular_;
    httpBackend = _httpBackend_;
    regexpUrl = _regexpUrl_;

    routes();
  }

  //---
  
  function routes() {

    httpBackend.when('GET', '/users')
      .respond(function(method, url, data) {
        return [200, angular.copy(users)];
      });

    //--

    httpBackend.when('GET', regexpUrl(/users\/(\d+)/))
      .respond(function(method, url, data) {
        data = angular.fromJson(data);
        return [200, angular.copy(users[data.userId])];
      });

    //---

    httpBackend.when('POST', '/users')
      .respond(function(method, url, data) {
        data = angular.fromJson(data);

        var newUser = {userName: data.userName, userId: userId};

        users[userId] = newUser;
        userId++;

        return [200, angular.copy(newUser)];
      });

  }

  return {
    config: Config
  };

})();


//--- === ---


// run

  // Mark urls that match regexp as a match,
  // you can pass this as the url argument to $httpBackend.[when|expect]
angular.module('app').run(

  ['$httpBackend', '$timeout', 

function($httpBackend, $timeout) {

  var regexpUrl = function(regexp) {
    return {
      test: function(url) {
        this.matches = url.match(regexp);
        return this.matches && this.matches.length > 0;
      }
    };
  };

  //---

  // Allow JSONP to pass to external services (ie Solr) 
  $httpBackend.when('JSONP', regexpUrl(/http:\/\/.*/)).passThrough();

  //---

  UserMock.config(angular, $httpBackend, regexpUrl);

  //---

  // A "run loop" of sorts to get httpBackend to 
  // issue responses and trigger the client code's callbacks
  var flushBackend = function() {
    try {
      $httpBackend.flush();
    } catch (err) {
      // ignore that there's nothing to flush
    }
    $timeout(flushBackend, 500);
  };
  $timeout(flushBackend, 500);

}]);