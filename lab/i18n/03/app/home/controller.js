define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = [ '$scope', '$translate' ];

  function HomeCtrl($scope, $translate) {

    $scope.languages = [ 'pt_BR', 'en_US' ];
    $scope.selected = $translate.use();

    $scope.itemSelected = function() {
      $translate.use($scope.selected);
    };

  }

});
