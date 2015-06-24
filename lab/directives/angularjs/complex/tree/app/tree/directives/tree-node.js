(function() {
  'use strict';

  angular.module( 'app' ).directive('treeNode', treeNode);

  //---

  // https://docs.angularjs.org/guide/directive
  // https://docs.angularjs.org/api/ng/service/$compile

  treeNode.$inject = ['$compile'];

  function treeNode($compile) {

    var scope = {
      text: '@'
    };

    var directive = {
      restrict: 'E',
      scope: scope,

      require: ['^treeRoot', 'treeNode'],

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
      var attrs = {};
      var children = [];
      //---

      var vm = this;

      vm.addChild = function(node) {
        children.push(node);
      };

      vm.getChildren = function() {
        return children;
      };

      vm.getNode = function() {
        var node = angular.extend(attrs, {
          text: vm.text
        });
        if(children.length > 0) {
          node = angular.extend(node, {
            children: children
          });
        }
        return node;
      };
    }

    //---

    function linkingFn(scope, el, attr, ctrls) {

      var treeRootCtrl = ctrls[0],
          treeNodeCtrl = ctrls[1],
          parentTreeNodeCtrl = el.parent().inheritedData('$treeNodeController');

      //---

      var node = scope.vm.getNode();

      if( parentTreeNodeCtrl ) {
        parentTreeNodeCtrl.addChild( node );
      } else {
        treeRootCtrl.addNode( node );
      }

      //---

      if( treeRootCtrl.isDebug() ) {
        console.log('TreeNode : ' + scope.vm.text);

        if(parentTreeNodeCtrl)
          console.log('Parent TreeNode Ctrl: ', parentTreeNodeCtrl );
        console.log('TreeNode Ctrl: ', treeNodeCtrl );
        console.log('TreeRoot Ctrl: ', treeRootCtrl );

        console.log(node);

        //---

        var template = templateFn( el, attr );
        template = $compile( template )(scope);
        el.append( template );
      }

    }

    //---

    function templateFn(tElement, tAttrs) {
      return [
        '<div>tree node : {{vm.text}}</div>'
      ].join('');
    }

    //---

    return directive;

  }

})();
