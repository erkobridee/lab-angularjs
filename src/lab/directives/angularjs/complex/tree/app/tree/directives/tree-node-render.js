(function() {
  'use strict';

  angular.module( 'app' ).directive('treeNodeRender', treeNodeRender);

  //---

  // https://docs.angularjs.org/guide/directive
  // https://docs.angularjs.org/api/ng/service/$compile

  treeNodeRender.$inject = ['$compile'];

  function treeNodeRender($compile) {

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
      if( angular.isArray( ctrl.data.children ) ) {
        var template = childrenTemplateFn( el, attr );
        template = $compile( template )( scope );
        el.append( template );
      }
    }

    //---

    function templateFn(tElement, tAttrs) {
      return [
        '<li>{{vm.data.text}}</li>'
      ].join('');
    }

    function childrenTemplateFn(tElement, tAttrs) {
      return [
        '<tree-render data="vm.data.children"></tree-render>'
      ].join('');
    }

    //---

    return directive;

  }

})();
