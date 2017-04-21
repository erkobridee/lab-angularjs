(function() {
  'use strict';

  // https://toddmotto.com/exploring-the-angular-1-5-component-method/
  // https://code.angularjs.org/1.6.4/docs/guide/component

  angular
    .module( 'app' )
    .component( 'newerSelectOne', {
      bindings : {
        data : '<',
        selected : '='
      },
      templateUrl : 'app/newer-selectone/template.html'
    });

})();
