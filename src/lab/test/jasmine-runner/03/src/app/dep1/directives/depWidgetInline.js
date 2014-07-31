define(
// require.js dependency injection
[
  '../module'
],

// require.js module scope
function(module) {
  'use strict';

  module.directive(

    // directive name
    'depWidgetInline',

  // directive definition
  function() {

    return {

      restrict: 'EA',
        // E - Element <dep-widget-inline title="my widget">widget content</dep-widget-inline>
        // A - Attribute <div data-dep-widget-inline title="my widget">widget content</div>
        // C - Class <div class="dep-widget-inline" title="my widget">widget content</div>
      replace: true,
      transclude: true,

      template: '<div class="widget"><div class="content" ng-transclude></div></div>',

      link: function(scope, element, attrs) {
        //console.log('depWidgetInline directive');
        element.prepend("<div class='title'>" + attrs.title + "</div>");
      }

    };

  });

});
