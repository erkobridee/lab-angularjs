// run

  // Mark urls that match regexp as a match,
  // you can pass this as the url argument to $httpBackend.[when|expect]
angular.module('app.mock').run(

  ['$httpBackend', '$timeout', 'MockService',

function($httpBackend, $timeout, MockService) {

  MockService.config(angular, $httpBackend);

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
