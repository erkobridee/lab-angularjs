define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

  module.controller(
    // controller name
    'CepCtrl',

    // dependencies injection
    [
      '$scope', 'CepResource',

  // controller definition
  function ($scope, resource) {

    $scope.cep = '';

    $scope.buscarFn = function() {

      if('' !== $scope.cep) {
        resource.get({
          cep: $scope.cep
        }, function(result) {
          $scope.resultado = result;
          $scope.resultadoJson = angular.toJson(result, true);
        });
      }

    };

    $scope.keypressFn = function(event) {
      // enter key
      if (event.which === 13) {
        $scope.buscarFn();
      }
    };

  }]);

});
