define(function(require) {
  'use strict';

  var module = require('./module');

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
