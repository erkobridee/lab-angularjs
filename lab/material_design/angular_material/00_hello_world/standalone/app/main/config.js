(function(){
  'use strict';

  angular
    .module('app')
    .config(ConfigApp);

  //---

  ConfigApp.$inject = ['$mdThemingProvider'];

  function ConfigApp($mdThemingProvider) {
    $mdThemingProvider
      .theme('default');
  }

})();
