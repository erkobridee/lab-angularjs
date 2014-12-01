define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.element(document).ready(startAngularApp);

  //---

  function startAngularApp() {
    var module = require('./main/package');
    angular.bootstrap(document, [module.name]);
  }

});
