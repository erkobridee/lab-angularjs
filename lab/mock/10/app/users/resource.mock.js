angular.mock.backend.addResource(function($rootScope, httpBackend, regexpUrl, getParams) {
  'use strict';

  // Some statefullness
  /*
  var users = {
    0: {userName: 'mock backend user', userId: 0},
    1: {userName: 'aloha', userId: 1}
  };
  */
  var users = [
    {userName: 'mock backend user', userId: 0},
    {userName: 'aloha', userId: 1}
  ];
  var userId = 2;

  //---

  console.log('$rootScope');
  console.log($rootScope);

  //--- routes ---

  var baseURL = '/rest/users';

  console.log(getParams(baseURL + '?param1=abc&param2=def'));

  // regexpUrl(?) >> accept RegExp object or String

  httpBackend.when('GET', regexpUrl(/rest\/users(\?|$)/))
    .respond(function(method, url, data) {
      console.log(url);
      var params = getParams(url);
      if(params) {
        var result = [];
        for(var i = 0, len = users.length; i < len; i++) {
          if(users[i].userName === params.userName) result.push(users[i]);
        }
        return [200, angular.copy(result)];
      } else {
        return [200, angular.copy(users)];
      }
    });

  //--

  httpBackend.when('GET', regexpUrl(baseURL + '/(\\d+)'))
    .respond(function(method, url, data) {
      data = angular.fromJson(data);
      return [200, angular.copy(users[data.userId])];
    });

  //---

  httpBackend.when('POST', regexpUrl(baseURL))
    .respond(function(method, url, data) {
      data = angular.fromJson(data);

      var newUser = {userName: data.userName, userId: userId};

      users[userId] = newUser;
      userId++;

      return [200, angular.copy(newUser)];
    });

});
