angular.mock.backend.addResource(function($rootScope, httpBackend, regexpUrl) {
  'use strict';

  // Some statefullness
  var users = {
    0: {userName: 'mock backend user', userId: 0}
  };
  var userId = 1;

  //---

  console.log($rootScope);

  //--- routes ---

  var baseURL = '/users';

  // regexpUrl(?) >> accept RegExp object or String

  //httpBackend.when('GET', regexpUrl(/\/users$/))
  httpBackend.when('GET', regexpUrl(baseURL))
    .respond(function(method, url, data) {
      return [200, angular.copy(users)];
    });

  //--

  //httpBackend.when('GET', regexpUrl(/\/users\/(\d+)$/))
  httpBackend.when('GET', regexpUrl(baseURL + '/(\\d+)'))
    .respond(function(method, url, data) {
      data = angular.fromJson(data);
      return [200, angular.copy(users[data.userId])];
    });

  //---

  //httpBackend.when('POST', regexpUrl(/\/users$/))
  httpBackend.when('POST', regexpUrl(baseURL))
    .respond(function(method, url, data) {
      data = angular.fromJson(data);

      var newUser = {userName: data.userName, userId: userId};

      users[userId] = newUser;
      userId++;

      return [200, angular.copy(newUser)];
    });

});