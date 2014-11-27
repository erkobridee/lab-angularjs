define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('CepCtrl', CepCtrl);

  //---

  CepCtrl.$inject = ['CepResource'];

  function CepCtrl(resource) {
    var vm = this;

    vm.cep = '';

    vm.buscarFn = buscarFn;

    vm.keypressFn = keypressFn;

    //---

    function buscarFn() {

      if('' !== vm.cep) {
        resource.get({
          cep: vm.cep
        }, function(result) {
          vm.resultado = result;
          vm.resultadoJson = angular.toJson(result, true);
        });
      }

    }

    function keypressFn(event) {
      // enter key
      if (event.which === 13) {
        vm.buscarFn();
      }
    }

  }

});
