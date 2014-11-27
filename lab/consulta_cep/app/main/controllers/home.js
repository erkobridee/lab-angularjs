define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = ['$scope', '$location'];

  function HomeCtrl($scope, $location) {
    var vm = this;

    // TODO: define vm (ViewModel) attribures

    //---

    $location.path('/cep');

  }

});
