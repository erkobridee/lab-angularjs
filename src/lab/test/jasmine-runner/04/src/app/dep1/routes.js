define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {

    $routeProvider
      .when(
        '/dep1',
        {
          templateUrl   : 'app/dep1/template.html',
          controller    : 'Dep1Ctrl',
          controllerAs  : 'vm'
        }
      );

  }

});
