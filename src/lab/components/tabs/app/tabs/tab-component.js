(function defineTab(module){
  'use strict';

  function TabController(){
    var controller = this;

    // constructor
    controller.$onInit = function init(){
      controller.tab = {
        label : controller.label,
        selected : false
      };

      // controller.tabs === require: { tabs: '^^tabs' }
      controller.tabs.addTab(controller.tab);
    };
  }

  var templatePath = [
    'app/',
    'tabs/',
    'tab.html'
  ].join('');

  var tabComponent = {
    bindings : {
      label : '@'
    },
    require : {
      tabs : '^^tabs'
    },
    transclude : true,
    templateUrl : templatePath,
    controller : TabController
  };

  module.component('tab', tabComponent);

})(angular.module('app'));
