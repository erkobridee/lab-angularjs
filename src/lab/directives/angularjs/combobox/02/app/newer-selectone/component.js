(function() {
  'use strict';

  // https://toddmotto.com/exploring-the-angular-1-5-component-method/
  // https://code.angularjs.org/1.6.4/docs/guide/component

  var newerSelectOne = {
    bindings : {
      data : '<',
      selected : '='
    },
    templateUrl : 'app/newer-selectone/template.html'
  };

  angular
    .module( 'app' )
    .component( 'newerSelectOne', newerSelectOne );

})();
