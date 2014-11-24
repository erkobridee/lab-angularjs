define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(translateProvider);

  //---

  translateProvider.$inject = [ '$translateProvider' ];

  function translateProvider($translateProvider) {

    $translateProvider
      .translations('en_US', require('./locale/en_US'))
      .translations('pt_BR', require('./locale/pt_BR'))

      .determinePreferredLanguage();

  }

});
