(function(){
  'use strict';

  function startApp(){
    angular.bootstrap(document, ['app']);
  }

  angular
    .element(document)
    .ready(startApp);

})();
