define(
// require.js dependency injection
[
  'angular',

  './main/package'
],

// require.js module scope
function(angular, mainModule) {
  'use strict';

  function startApp() {
    console.log('bootstrap : ' + mainModule.name);

    angular.bootstrap(document, [
      mainModule.name
    ]);
  }

  angular
    .element(document)
    .ready(startApp);

});
