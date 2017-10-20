(function defineTabs(module){
  'use strict';

  function TabsController(){
    var controller = this;

    // constructor
    controller.$onInit = function init(){
      controller.tabs = [];
    };

    controller.addTab = function addTab(tab){
      controller.tabs.push(tab);
    };

    controller.selectTab = function selectTab(index){
      controller.tabs.forEach(function(tab){
        tab.selected = false;
      });
      controller.tabs[index].selected = true;
    };

    controller.selectDefault = function selectDefault(){
      var selected = 0;
      if(controller.selected){
        selected = parseInt(controller.selected, 10);
        if(isNaN(selected)){
          selected = 0;
        }
      }
      controller.selectTab(selected);
      selected = null;
    };
  }

  var templatePath = [
    'app/',
    'tabs/',
    'tabs.html'
  ].join('');

  var tabsComponent = {
    bindings : {
      selected : '@'
    },
    transclude : true,
    templateUrl : templatePath,
    controller : TabsController
  };

  module.component('tabs', tabsComponent);

})(angular.module('app'));
