define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureLazyLoad);

  //---

  configureLazyLoad.$inject = ['$ocLazyLoadProvider'];

  function configureLazyLoad($ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      loadedModules: [
        module.name,
        require('app/core/home/package').name,
        require('app/core/page/package').name,
        require('app/core/404/package').name
      ],
      asyncLoader: require
    });

  }

});
