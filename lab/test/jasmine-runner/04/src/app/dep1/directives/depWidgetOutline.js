define(function(require) {
  'use strict';

  var module = require('../module');

  module.directive('depWidgetOutline', depWidgetOutline);

  //---

  depWidgetOutline.$inject = ['$log'];

  function depWidgetOutline(console) {

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

    DepWidgetOutlineCtrl.$inject = ['$scope'];

    return directive;

    //---

    function DepWidgetOutlineCtrl($scope) {
      var vm = this;

      vm.title = $scope.title;

    }

    function linkFunc(scope, element, attrs) {

      console.debug('depWidgetOutLine directive link');

      console.debug('LINK: attrs.title = %s', attrs.title);
      console.debug('LINK: scope.title = %s', scope.title);
      console.debug('LINK: scope.vm.title = %s', scope.vm.title);

      // fallback
      if(!scope.title) scope.title = attrs.title || '';
    }

  }

});
