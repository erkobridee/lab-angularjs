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

    $scope.languages = [ 'pt_BR', 'en_US' ];
    $scope.selected = $translate.use();

    $scope.itemSelected = function() {
      $translate.use($scope.selected);
    };

  }

});
