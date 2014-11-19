define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('Dep1Ctrl', Dep1Ctrl);

  //---

  Dep1Ctrl.$inject = ['$log', 'Dep1Factory', 'Dep1Service'];

  function Dep1Ctrl(console, depFactory, depService) {
    var vm = this;

    vm.value = 'Application Dependency Module Value';

    vm.message = 'This is Sparta';

    vm.sum = sum;

    vm.toExciteMsg = toExciteMsg;

    vm.toQuestionMsg = toQuestionMsg;

    //---

    console.debug( 'Dep1Ctrl' );

    function sum(a, b) {
      return a+b;
    }

    function toExciteMsg(msg) {
      return depFactory.exciteText(msg);
    }

    function toQuestionMsg(msg) {
      return depService.questionText(msg);
    }

  }

});
