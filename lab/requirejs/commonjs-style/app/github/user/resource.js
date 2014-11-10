define(function(require) {
  'use strict';

  var module = require('../module');

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
