define(function(require) {
  'use strict';

  var module = require('./module');
  require('i18n/package');

  module.controller( 'HomeCtrl', HomeCtrl );

  //---

  HomeCtrl.$inject = [ '$scope', '$translatePartialLoader', '$translate' ];

  function HomeCtrl($scope, $translatePartialLoader, $translate) {

    console.log('HomeCtrl');

    $translatePartialLoader.addPart('home');
    $translate.refresh();

  }

});
