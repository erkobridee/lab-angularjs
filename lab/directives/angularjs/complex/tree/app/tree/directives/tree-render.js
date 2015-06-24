(function() {
  'use strict';

  angular.module( 'app' ).directive('treeRender', treeRender);

  //---

  // https://docs.angularjs.org/guide/directive
  // https://docs.angularjs.org/api/ng/service/$compile

  treeRender.$inject = [];

  function treeRender() {

    var scope = {
      data: '='
    };

    var directive = {
      restrict: 'E',
      scope: scope,

      controller: ControllerFn,
      controllerAs: 'vm',
      // So our isolated scope will be stored
      // on the `this` context of our controller
      // instead of
      bindToController: true,

      link: linkingFn,

      template: templateFn
    };

    //---

    // ControllerFn.$inject = [];

    function ControllerFn() {
      var vm = this;
    }

    //---

    function linkingFn(scope, el, attr, ctrl) {
    }

    //---

    function templateFn(tElement, tAttrs) {
      return [
        '<ul>',
          '<tree-node-render ng-repeat="node in vm.data track by $index" data="node">',
          '</tree-node-render>',
        '</ul>'
      ].join('');
    }

    //---

    return directive;

  }

})();
