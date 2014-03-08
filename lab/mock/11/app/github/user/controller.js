define(
// require.js dependency injection
[
  '../module',
  './resource'
], 

// require.js module scope
function(module) {
  'use strict';


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