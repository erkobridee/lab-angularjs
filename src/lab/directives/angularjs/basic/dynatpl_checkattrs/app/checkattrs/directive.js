(function() {
  'use strict';

  angular
    .module('app')
    .directive('checkAttrs', checkAttrs);

    //---

    // https://docs.angularjs.org/guide/directive
    // https://docs.angularjs.org/api/ng/service/$compile

    checkAttrs.$inject = ['CheckAttrsService'];

    function checkAttrs(service) {

      var scope = {
        requiredId: '@',
        requiredText: '@',
        optionalLabel: '@?'
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

        compile: compileFn,

        template: templateFn
      };

      //---

      // ControllerFn.$inject = [];
      function ControllerFn() {}

      //---

      function compileFn(tElement, tAttrs) {
        console.log('checkAttrs compile');

        service.compile.checkRequiredAttrs(
          'checkAttrs', tAttrs, [
            'requiredId', 'requiredText'
          ]
        );

        return function postLink(scope) {
           console.log('checkAttrs post link');
        };
      }

      //---

      function templateFn(tElement, tAttrs) {
        return [
          '<div ',
            service.template.attr(tAttrs, 'requiredId', 'id'),
            service.template.checkAdd(tAttrs, 'requiredText', 'class="hasTextDefined" '),
          '>',
            service.template.checkAdd(
              tAttrs.requiredText, '<p><b>required text:</b>' + tAttrs.requiredText + '</p>'
            ),
            service.template.checkAdd(
              tAttrs.optionalLabel, '<p><i>optional label:</i>' + tAttrs.optionalLabel + '</p>'
            ),
          '</div>'
        ].join('');
      }

      //---

      return directive;

    }

})();
