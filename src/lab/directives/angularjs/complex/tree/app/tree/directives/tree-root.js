(function() {
  'use strict';

  angular.module( 'app' ).directive('treeRoot', treeRoot);

  //---

  // https://docs.angularjs.org/guide/directive
  // https://docs.angularjs.org/api/ng/service/$compile

  treeRoot.$inject = ['$compile'];

  function treeRoot($compile) {

    var scope = {
      ctrlData: '=',
      debug: '@?'
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

      link: linkingFn
    };

    //---

    // ControllerFn.$inject = [];

    function ControllerFn() {

      var nodes = [];
      //---

      var vm = this;

      vm.addNode = function(node) {
        nodes.push(node);
      };

      vm.getNodes = function() {
        return nodes;
      };

      vm.isDebug = function() {
        return (vm.debug === 'true');
      };
    }

    //---

    function linkingFn(scope, el, attr, ctrl) {
      if( ctrl.isDebug() ) {
        console.log( 'tree-root' );
        console.log( ctrl.getNodes() );
      }

      //---

      var template = templateFn( el, attr );
      template = $compile( template )( scope );
      el.append( template );
    }


    //---

    function templateFn(tElement, tAttrs) {
      return [
        '<div ng-if="vm.isDebug()">tree root</div>',
        '<hr ng-if="vm.isDebug()">',

        '<div>Render Trees</div>',
        '<ul>',
          '<li ng-if="vm.ctrlData">',
            '<b>tree from controller:</b>',
            '<tree-render data="vm.ctrlData"></tree-render>',
          '</li>',
          '<span ng-if="vm.ctrlData">&nbsp;</span>',
          '<li>',
            '<b>tree from directives config:</b>',
            '<tree-render data="vm.getNodes()"></tree-render>',
          '</li>',
        '</ul>',

        '<hr>',
        '<div>JavaScript Objects</div>',
        '<ul>',
          '<li ng-if="vm.ctrlData">',
            '<b>tree data from controller:</b>',
            '<pre>{{vm.ctrlData | json}}</pre>',
          '</li>',
          '<li>',
            '<b>tree data directives config:</b>',
            '<pre>{{vm.getNodes() | json}}</pre>',
          '</li>',
        '</ul>'
      ].join('');
    }

    //---

    return directive;

  }

})();
