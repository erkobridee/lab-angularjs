define(function(require) {
  'use strict';

  var module = require('../module');

  module.directive('depWidgetOutline', depWidgetOutline);

  //---

  function depWidgetOutline() {

    var directive = {

      restrict: 'EA',
        // E - Element <dep-widget-outline title="my widget">widget content</dep-widget-outline>
        // A - Attribute <div data-dep-widget-outline title="my widget">widget content</div>
        // C - Class <div class="dep-widget-outline" title="my widget">widget content</div>

      replace: true,

      transclude: true,

      scope: {
        title: '@'
      },

      //template: '<div class="widget"><div class="title">{{vm.title}}</div><div class="content" ng-transclude></div></div>',
      templateUrl: 'app/dep1/directives/depWidget.tpl.html',

      link: linkFunc,

      controller: DepWidgetOutlineCtrl,

      controllerAs: 'vm'

    };

    return directive;

    //---

    DepWidgetOutlineCtrl.$inject = ['$scope'];

    function DepWidgetOutlineCtrl($scope) {
      var vm = this;

      vm.title = $scope.title;

    }

    function linkFunc(scope, element, attrs) {

      console.log('depWidgetOutLine directive link');

      console.log('LINK: attrs.title = %s', attrs.title);
      console.log('LINK: scope.title = %s', scope.title);
      console.log('LINK: scope.vm.title = %s', scope.vm.title);

      // fallback
      if(!scope.title) scope.title = attrs.title || '';
    }

  }

});
