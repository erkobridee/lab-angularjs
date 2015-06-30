(function() {
  'use strict';

  angular
    .module('app')
    .factory('$onkeydown', onkeydownService)
    .directive('onkeydown', onkeydown)
    .directive('keydown', keydown);

  //---

  function onkeydownService() {
    var keysMap = {};
    var isListener = false;
    //---
    var service = {};

    service.add = addKeyFn;
    service.registerListener = listenerFn;

    //---

    function addKeyFn(key, handler) {
      keysMap[key] = handler;
    }

    function listenerFn(element) {
      if(!isListener) {
        isListener = true;
        element.on('keydown', onKeyDown);
        console.log('register onkeydown listener to: ', element, ' keys map: ', keysMap);
      }
    }

    //---

    function onKeyDown(event) {
      var handler = keysMap[event.keyCode];
      if(handler) handler();
    }

    //---

    return service;
  }

  //---

  onkeydown.$inject = ['$onkeydown'];
  function onkeydown(service) {

    var scope = {};

    var directive = {
      restrict: 'E',
      scope: scope,
      link: linkFunc,
      controller: ControllerFn,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    //---

    function linkFunc(scope, element, attrs) {
      scope.vm.registerListener(element.parent());
    }

    //---

    function ControllerFn() {
      var vm = this;

      vm.add = service.add;

      vm.registerListener = service.registerListener;
    }

  }

  //---

  function keydown() {
    var scope = {
      code: '=',
      handler: '&'
    };

    var directive = {
      restrict: 'E',
      require: '^onkeydown',
      scope: scope,
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc(scope, element, attrs, parentCtrl) {
      console.log('element: ', element);
      console.log('\tscope.code: ', scope.code);

      parentCtrl.add(scope.code, scope.handler);
    }
  }

})();
