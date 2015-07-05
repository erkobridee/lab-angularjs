(function() {
  'use strict';

  angular
    .module('app')
    .constant('ITEM_DIRECTIVE_TPLS', {
      'type1': '<div><h3>TYPE 1</h3><p>{{vm.content.data}}</div>',
      'type2': '<div><h3>TYPE 2</h3><p>{{vm.content.data}}</div>',
      'type3': '<div><h3>TYPE 3</h3><p>{{vm.content.data}}</div>',
    });

})();
