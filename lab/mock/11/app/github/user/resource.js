define(
// require.js dependency injection
[
  '../module'
], 

// require.js module scope
function(module) {
  'use strict';


  module.factory(
    // resource name
    'GitHubUsersResource', 

    // dependency injection
    ['$resource', 

  // resource definition
  function(resource){
      
      var user = resource(
        'https://api.github.com/users/:login'
      ); 

      return user;

  }]);


});