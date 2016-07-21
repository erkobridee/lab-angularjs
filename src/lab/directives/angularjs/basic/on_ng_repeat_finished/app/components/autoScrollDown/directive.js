(function(){
  'use strict';

  function Directive($timeout){

    function postLink(scope, element, attrs){
      var el0 = element[0];

      //---

      function onNgRepeatFinishedHandler(){
        // el0.scrollTop = el0.scrollHeight;
        element.animate({
          scrollTop : el0.scrollHeight
        }, 500, 'swing');
      }

      //---

      (function init(){

        var onNgRepeatFinishedListerner = scope.$on(
          'ngRepeatFinished', onNgRepeatFinishedHandler
        );

        //---

        scope.$on('$destroy', function(){
          onNgRepeatFinishedListerner();
          onNgRepeatFinishedListerner = null;

          //---

          el0 = null;
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

  // auto-scroll-down
  angular
    .module('components.autoScrollDown')
    .directive('autoScrollDown', Directive);

})();
