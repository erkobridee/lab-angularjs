(function(){
  'use strict';

  function Directive($timeout){
    var EVENT = 'ngRepeatFinished';
    var ATTR = 'onNgRepeatFinished';

    function postLink(scope, element, attrs){
      var onRenderFinishedAction;

      function triggerEvent(){
        scope.$emit(EVENT);
      }

      function triggerAction(){
        if(onRenderFinishedAction){
          scope.$apply(onRenderFinishedAction);
        }
      }

      function onRenderFinished(){
        $timeout(function(){
            triggerEvent();
            triggerAction();
        });
      }

      //---

      function checkAttrs(){
        if(angular.isDefined(attrs[ATTR])){
          onRenderFinishedAction = attrs[ATTR];
        }
      }

      //---

      (function init(){
        if(scope.$last){
          checkAttrs();
          onRenderFinished();
        }

        //---

        scope.$on('$destroy', function(){
          onRenderFinishedAction = null;
        });
      })();
    }

    //---

    var directive = {
      restrict : 'A',
      link : postLink
    };

    return directive;
  }

  Directive.$inject = ['$timeout'];

  //---

  // on-ng-repeat-finished
  angular
    .module('components.onNgRepeatFinished')
    .directive('onNgRepeatFinished', Directive);

})();
