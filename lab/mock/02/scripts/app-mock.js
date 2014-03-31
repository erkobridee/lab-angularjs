// provider

  // You can also just use provide to blanket replace $httpBackend
  // with the mock
angular.module('app').config(

  ['$provide',

function($provide) {

  var obj = new angular.mock.$HttpBackendProvider(),
      createHttpBackendMock = obj.$get[1];

  // Decorate by passing in the constructor for mock $httpBackend
  $provide.decorator('$httpBackend', createHttpBackendMock);

}]);


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

  // Some statefullness
  var users = {
    0: {userName: 'mock backend user', userId: 0}
  };
  var userId = 1;

  //---

  $httpBackend.when('GET', '/users')
    .respond(function(method, url, data) {
      return [200, angular.copy(users)];
    });

  //--

  $httpBackend.when('GET', regexpUrl(/users\/(\d+)/))
    .respond(function(method, url, data) {
      data = angular.fromJson(data);
      return [200, angular.copy(users[data.userId])];
    });

  //---

  $httpBackend.when('POST', '/users')
    .respond(function(method, url, data) {
      data = angular.fromJson(data);

      var newUser = {userName: data.userName, userId: userId};

      users[userId] = newUser;
      userId++;

      return [200, angular.copy(newUser)];
    });

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
