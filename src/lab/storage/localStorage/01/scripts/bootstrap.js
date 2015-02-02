(function() {
  'use strict';

  angular.element(document).ready(startAngularApp);

  //---

  function startAngularApp() {
    angular.bootstrap(document, ['app']);
  }

})();
