// run

  // Mark urls that match regexp as a match,
  // you can pass this as the url argument to $httpBackend.[when|expect]
angular.module('app.mock').run(

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
