define(function(require) {
  'use strict';

  var module = require('../module');

  require('./resource');

  module.controller(
    // controller name
    'GitHubUserCtrl',

    // dependency injection
    ['$scope', 'GitHubUsersResource',

  // controller definition
  function(scope, resource){

    scope.user = null;
    scope.notFound = null;

    scope.login = 'angular';
    scope.findLoginAction = function() {
      getUser(scope.login);
    };

    var getUser = function(findLogin) {
      resource.get(
        {login: findLogin},
        // success 200
        function(res) {
          scope.user = res;
          scope.notFound = null;
        },
        // error 404
        function(result, response) {
          scope.user = null;
          scope.notFound = result.data;
        }
      );
    };

  }]);

});
