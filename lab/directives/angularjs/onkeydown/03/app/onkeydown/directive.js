(function() {
  'use strict';

  angular
    .module('app')
    .factory('$onkeydown', onkeydownService)
    .directive('onkeydown', onkeydown)
    .directive('keydown', keydown);

  //---

  onkeydownService.$inject = [];
  function onkeydownService() {

    var keymapFor = {},
        keysmap = null;

    window.document.onkeydown = function(e) {
        if (!e){ e = event; }
        onkeydownHandler(e);
    };

    //---

    function onkeydownHandler(event) {
      if(!keysmap) { return; }

      var handler = keysmap[event.keyCode];
      if(handler) {
        handler();
      } else {
        console.log('no handler registered to onkeydown - key code: ', event.keyCode);
      }
      handler = null;
    }

    function defineKeysmap() {
      var newKeysmap = {};
      angular.forEach(keymapFor, function(value, index) {
        angular.extend(newKeysmap, value);
      });
      keysmap = newKeysmap;
      newKeysmap = null;
    }

    function registerFn(key, map) {
      keymapFor[key] = map;
      defineKeysmap();
    }

    function unregisterFn(key) {
      if(keymapFor[key]) {
        keymapFor[key] = null;
        delete keymapFor[key];
        defineKeysmap();
      }
    }

    //---

    var service = {
      register: registerFn,
      unregister: unregisterFn
    };

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
      controller: ['$scope', ControllerFn],
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    //---

    function linkFunc(scope, element, attrs) {
      scope.vm.registerListener();

      scope.$on('$destroy', function() {
        scope.vm.unRegisterListener();
      });
    }

    //---

    function ControllerFn(scope) {

      var vm = this;
      vm._oid = 'onkeydown:'+scope.$id;
      vm.keymap = {};

      vm.add = function(key, value) {
        vm.keymap[key] = value;
      };

      vm.registerListener = function() {
        service.register(vm._oid, vm.keymap);
      };

      vm.unRegisterListener = function() {
        service.unregister(vm._oid);
      };

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
      parentCtrl.add(scope.code, scope.handler);
    }
  }

})();
