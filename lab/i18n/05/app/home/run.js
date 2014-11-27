define(function(require) {
  'use strict';

  var module = require('./module');

  module.run(runner);

  //---

  runner.$inject = ['$translatePartialLoader', '$translate'];

  function runner($translatePartialLoader, $translate) {

    $translatePartialLoader.addPart('home');
    $translate.refresh();

  }

});
