define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(i18nConfig);

  //---

  i18nConfig.$inject = [ '$translateProvider' ];

  function i18nConfig($translateProvider) {

    $translateProvider
      .translations('en_US', require('./locale/en_US'))
      .translations('pt_BR', require('./locale/pt_BR'));

      console.log('i18n of module Home loaded');
  }

});
