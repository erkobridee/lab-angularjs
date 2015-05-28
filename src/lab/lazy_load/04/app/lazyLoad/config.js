define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureLazyLoad);

  //---

  configureLazyLoad.$inject = ['$ocLazyLoadProvider'];

  function configureLazyLoad($ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      modules: [
        module.name,
        require('app/main/package').name,
        require('app/home/package').name
      ],
      jsLoader: require,
      debug: false
    });

  }

});
