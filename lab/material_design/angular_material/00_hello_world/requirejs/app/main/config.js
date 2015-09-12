define(function(require) {
  'use strict';

  var module = require('./module');

  module
    .config(ConfigApp);

  //---

  ConfigApp.$inject = ['$mdThemingProvider'];

  function ConfigApp($mdThemingProvider) {
    $mdThemingProvider
      .theme('default');
  }

});
