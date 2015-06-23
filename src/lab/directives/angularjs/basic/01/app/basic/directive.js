(function() {
  'use strict';

  // https://umur.io/angularjs-directives-using-isolated-scope-with-attributes/

  // https://docs.angularjs.org/api/ng/directive/ngClass

  angular.module( 'app' ).directive('basic', basic);

  //---

  // https://docs.angularjs.org/guide/directive
  // https://docs.angularjs.org/api/ng/service/$compile

  basic.$inject = [ ];

  function basic() {

    var scope = {
      classDef: '@myClass',
      text: '@myText',
      twoWayBind: '=myTwoWayBind',
      oneWayBind: '&myOneWayBind',
      sendMessage: '&?onMessage',   // optional attribute
      ctrlHandler: '&?'             // optional attribute
    };

    var directive = {
      restrict: 'E', // element
      scope: scope,

      transclude: true,

      controller: ControllerFn,
      controllerAs: 'vm',
      // So our isolated scope will be stored
      // on the `this` context of our controller
      // instead of
      bindToController: true,

      link: linkingFn,

      template: templateFn
    };

    //---

    // ControllerFn.$inject = [];

    function ControllerFn() {
      var vm = this;

      vm.buttonClick = function() {
        if(vm.sendMessage)
          vm.sendMessage({message: '1: hello controller - message from directive controller'});
      };

      vm.updatePerson1 = function() {
        var person = vm.twoWayBind;

        person.name = '? ' + person.name;

        vm.twoWayBind = person;
      };

      //---

      if(vm.sendMessage)
        vm.sendMessage({message: 'basic directive controller started'});

      console.log('CTRL: vm.text = ', vm.text );
      console.log('CTRL: vm.twoWayBind = ', vm.twoWayBind );
      console.log('CTRL: vm.oneWayBind = ', vm.oneWayBind() );

    }

    //---

    function linkingFn(scope, el, attr, ctrl) {
      /* undefined
      if(scope.text)
        console.log('LINK: scope.text = ', scope.text );
      if(scope.twoWayBind)
        console.log('LINK: scope.twoWayBind = ', scope.twoWayBind );
      if(scope.oneWayBind)
        console.log('LINK: scope.oneWayBind = ', scope.oneWayBind() );
      */

      console.log('LINK: scope.vm.text = ', scope.vm.text );
      console.log('LINK: scope.vm.twoWayBind = ', scope.vm.twoWayBind );
      console.log('LINK: scope.vm.oneWayBind = ', scope.vm.oneWayBind() );

      console.log('LINK CTRL: ctrl.text = ', ctrl.text );
      console.log('LINK CTRL: ctrl.twoWayBind = ', ctrl.twoWayBind );
      console.log('LINK CTRL: ctrl.oneWayBind = ', ctrl.oneWayBind() );
    }

    //---

    function templateFn(tElement, tAttrs) {
      return [
        '<div ng-class="{{vm.classDef}}">',
          '<p><b>text:</b> {{vm.text}}</p>',
          '<p><b>twoWayBind:</b> <pre>{{vm.twoWayBind | json}}</pre></p>',
          '<p><b>oneWayBind:</b> <pre>{{vm.oneWayBind() | json}}</pre></p>',
          '<hr>',
          '<p><button ng-click="vm.buttonClick()">1: hello controller - message from directive controller</button><p>',
          '<p><button ng-click="vm.sendMessage({message: \'2: hello controller - message from directive\'})">2: hello controller - message from directive</button><p>',
          '<p><button ng-click="vm.ctrlHandler()">Call controller handler function</button><p>',
          '<p><button ng-click="vm.updatePerson1()">Update person 1 data</button><p>',
          '<p><b><i>see console</i></b></p>',
          '<hr>',
          '<div ng-transclude></div>',
        '</div>'
      ].join('');
    }

    //---

    return directive;

  }


})();
