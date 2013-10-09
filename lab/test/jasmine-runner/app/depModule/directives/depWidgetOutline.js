angular.module('app.dep').directive(

  // directive name
  'depWidgetOutline', 

// directive definition
function() {

  return {

    restrict: 'EA', 
      // E - Element <dep-widget-outline title="my widget">widget content</dep-widget-outline> 
      // A - Attribute <div data-dep-widget-outline title="my widget">widget content</div>
      // C - Class <div class="dep-widget-outline" title="my widget">widget content</div>
    replace: true,
    transclude: true,
    
    scope: {
      title: '@'
    },

    //template: '<div class="widget"><div class="title">{{title}}</div><div class="content" ng-transclude></div></div>'
    templateUrl: 'depModule/directives/depWidget.tpl.html'

  };

});