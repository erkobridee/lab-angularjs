(function defineAccordion(module){
  'use strict';

  function ControllerFn($transclude){
    var controller = this;

    // constructor
    controller.$onInit = function(){
      controller.groups = [];
    };

    controller.addGroup = function(group){
      controller.groups.push(group);
    };

    controller.closeOthers = function(avoidGroup){
      controller.groups.forEach(function(group){
        if(
          (group.cid !== avoidGroup.cid) &&
          group.isOpen()
        ){
          group.toggle();
        }
      });
    };
  }

  var templatePath = [
    'app/',
    'components/',
    'accordion/',
    'accordion-component.html'
  ].join('');

  var component = {
    transclude : true,
    templateUrl : templatePath,
    controller : ControllerFn
  };

  module.component('accordion', component);

})(angular.module('app'));
