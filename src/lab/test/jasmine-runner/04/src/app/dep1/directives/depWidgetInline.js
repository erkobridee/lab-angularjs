define(function(require) {
  'use strict';

  var module = require('../module');

  module.directive('depWidgetInline', depWidgetInline);

  //---

  function depWidgetInline() {

    var directive = {

      restrict: 'EA',
        // E - Element <dep-widget-inline title="my widget">widget content</dep-widget-inline>
        // A - Attribute <div data-dep-widget-inline title="my widget">widget content</div>
        // C - Class <div class="dep-widget-inline" title="my widget">widget content</div>

      replace: true,

      transclude: true,

      template: '<div class="widget"><div class="content" ng-transclude></div></div>',

      link: linkFunc

    };

    return directive;

    //---

    function linkFunc(scope, element, attrs) {
      //console.log('depWidgetInline directive');
      element.prepend("<div class='title'>" + attrs.title + "</div>");
    }

  }

});
