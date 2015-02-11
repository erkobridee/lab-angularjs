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
