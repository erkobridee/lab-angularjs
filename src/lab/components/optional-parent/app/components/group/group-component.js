(function defineAccordion(module){
  'use strict';

  function ControllerFn($scope){
    var controller = this;

    // constructor
    controller.$onInit = function(){
      controller.cid = ('group_id_' + $scope.$id);

      controller.displayContent = false;

      controller.label = controller.label || 'Group Label';

      if(controller.accordionCtrl){
        controller.accordionCtrl.addGroup(controller);
      }
    };

    controller.toggle = function(){
      controller.displayContent = !controller.displayContent;

      if(controller.displayContent && controller.accordionCtrl){
        controller.accordionCtrl.closeOthers(controller);
      }
    };

    controller.isOpen = function(){
      return controller.displayContent;
    };
  }

  var templatePath = [
    'app/',
    'components/',
    'group/',
    'group-component.html'
  ].join('');

  var component = {
    bindings : {
      label : '@'
    },
    require : {
      accordionCtrl : '?^^accordion'
    },
    transclude : true,
    templateUrl : templatePath,
    controller : ControllerFn
  };

  module.component('group', component);

})(angular.module('app'));
