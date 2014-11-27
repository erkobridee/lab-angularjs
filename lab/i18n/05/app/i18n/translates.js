define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(i18nConfig);

  //---

  i18nConfig.$inject = [ '$translateProvider', '$translatePartialLoaderProvider' ];

  function i18nConfig($translateProvider, $translatePartialLoaderProvider) {

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: 'app/{part}/locale/{lang}.json'
    });

    $translateProvider.determinePreferredLanguage();

  }

});
