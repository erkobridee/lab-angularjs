(function() {
  'use strict';

  // https://toddmotto.com/exploring-the-angular-1-5-component-method/
  // https://code.angularjs.org/1.6.4/docs/guide/component

  function NewerSelectOneController(){
    var vm = this;

    vm.$onChanges = function(changes){
      if(changes.data){
        vm.selected = '';
      }
    };
  }

  var newerSelectOne = {
    bindings : {
      data : '<', // on way binding
      selected : '=', // two way binbing
      value : '@'
    },
    templateUrl: 'app/newer-selectone/template.html',
    controller : NewerSelectOneController
  };

  angular
    .module( 'app' )
    .component( 'newerSelectOne', newerSelectOne );

})();
