(function() {
  'use strict';

  angular
    .module('app')
    .directive('contentItem', contentItem);

    //---

    // https://docs.angularjs.org/guide/directive
    // https://docs.angularjs.org/api/ng/service/$compile

    contentItem.$inject = ['ITEM_DIRECTIVE_TPLS', '$compile'];
    function contentItem(tpls, $compile) {

      var scope = {
        content: '='
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
      function ControllerFn() {}

      //---

      function linkingFn(scope, element, attrs) {
        function getTemplate(type) {
          var tpl = tpls[type];
          if(!tpl) tpl = 'there is no template to type: <b>' + type + '</b>';
          return tpl;
        }

        element.html(getTemplate(scope.vm.content.content_type));
        $compile(element.contents())(scope);
      }

      //---

      return directive;

    }

})();
