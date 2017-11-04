(function defineComponent(module){
  'use strict';

  function ControllerFn($transclude){
    var controller = this;

    // check if a given transclusion slot is present by its name
    function hasTranscludeSlod(slotName){
      if(slotName && angular.isString(slotName)){
        // on controller info, there is an info about
        // the $transclude.isSlotFilled(slotName)
        // https://docs.angularjs.org/api/ng/service/$compile
        return $transclude.isSlotFilled(slotName);
      }
      return false;
    }

    function checkIfSlotsArePresent(){
      controller.isHeaderPresent = hasTranscludeSlod('headerSlot');
      controller.isSubHeaderPresent = hasTranscludeSlod('subHeaderSlot');
    }

    // constructor
    controller.$onInit = function(){
      controller.label = controller.label || 'hello world';

      controller.isHeaderPresent = false;
      controller.isSubHeaderPresent = false;
    };

    // this function will be called after html template was
    // processed and binded to the DOM
    controller.$postLink = function(){
      checkIfSlotsArePresent();
    };
  }

  var templatePath = [
    'app/',
    'component/',
    'component.html'
  ].join('');

  var component = {
    bindings : {
      label : '@'
    },
    transclude : {
      headerSlot : '?header',
      subHeaderSlot : '?subHeader'
    },
    templateUrl : templatePath,
    controller : ControllerFn
  };

  module.component('component', component);

})(angular.module('app'));
