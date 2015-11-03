(function() {
  'use strict';

  /**
    * @ngdoc directive
    * @name click-in-out
    *
    * @restrict A
    *
    * @description
    * handler click in and out of a given element
    *
    * @param {expression} onClickIn - Expression to evaluate upon a click on the element (The Event object is available as `$event`)
    * @param {expression} onClickOut - Expression to evaluate upon a click on the document (The Event object is available as `$event`)
    *
    * Usage:
    *
    * <any
    *   click-in-out
    *   on-click-in="onClickInHandler($event)"
    *   on-click-out="onClickOutHandler($event)">
    * </any>
    */
  var DIRECTIVE_NAME = 'clickInOut';
  angular.module( 'app' ).directive(DIRECTIVE_NAME, clickInOut);

  //---

  // https://docs.angularjs.org/guide/directive
  // https://docs.angularjs.org/api/ng/service/$compile
  // https://umur.io/advanced-angular-parse/
  // https://github.com/angular/angular.js/blob/v1.4.x/src/ng/directive/ngEventDirs.js

  clickInOut.$inject = ['$parse', '$rootScope', '$document'];

  function clickInOut($parse, $rootScope, $document) {

    var directive = {
      restrict: 'A', // attribute
      scope: true,
      compile: compileFn
    };

    //---

    function toHtmlStyle(value){
      if(!value || !angular.isString(value)) {
        return '';
      }
      return value.match(/[A-Z]?[a-z]+|[0-9]+/g)
                  .join('-')
                  .toLowerCase();
    }

    function checkRequiredAttrs(directiveName, attrsObject, attrsCheckArray){
      var required = [];
      if(angular.isArray(attrsCheckArray)){
        angular.forEach(attrsCheckArray, function(attr){
          if(!attrsObject[attr]){
            required.push(toHtmlStyle(attr));
          }
        });
      }
      if(required.length > 0){
        var message = [];
        message.push(toHtmlStyle(directiveName));
        message.push('required attributes:');
        message.push('[' + required.join(', ') + ']');
        message.push('not found');
        throw new Error(message.join(' '));
      }
    }

    //---

    function compileFn(tEl, tAttrs){

      console.log('compile... check required attributes');

      checkRequiredAttrs(DIRECTIVE_NAME, tAttrs, [
        'onClickIn', 'onClickOut'
      ]);

      return function linkingFn(scope, element, attrs, ctrl) {
        scope.target = null;

        console.log('LINK: scope = ', scope );

        var onClickIn = $parse(attrs.onClickIn);
        var onClickOut = $parse(attrs.onClickOut);

        function safeRun(callback){
          if($rootScope.$$phase) {
            scope.$evalAsync(callback);
          } else {
            scope.$apply(callback);
          }
        }

        function elementOnClick(event){
          scope.target = event.target;
          safeRun(function(){
            onClickIn(scope, {$event:event});
          });
        }

        function documentOnclick(event){
          if(
            scope.target &&
            scope.target !== event.target
          ){
            scope.target = null;
            safeRun(function(){
              onClickOut(scope, {$event:event});
            });
          }
        }

        element.on('click', elementOnClick);
        $document.on('click', documentOnclick);

        scope.$on('$destroy', function(){
          onClickIn = null;
          onClickOut = null;

          element.off('click', elementOnClick);
          $document.off('click', documentOnclick);
        });
      };
    }

    //---

    return directive;

  }

})();
