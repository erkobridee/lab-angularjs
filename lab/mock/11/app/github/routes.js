define(
// require.js dependecy injection
[
  './module'
],

//require.js module scope
function(module) {
  'use strict';


  module.config(
    // dependency injection
    ['$routeProvider', 

  function(routeProvider) {

    routeProvider
      .when(
        '/github/user',
        {
          controller: 'GitHubUserCtrl',
          templateUrl: 'app/github/user/template.html'
        }
      );

  }]);


});