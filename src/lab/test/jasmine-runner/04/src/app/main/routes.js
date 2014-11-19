define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {

    $routeProvider
      .when(
        '/404',
        {
          templateUrl: 'app/main/templates/404.html'
        }
      )

      .otherwise({redirectTo:'/404'});

  }

});
