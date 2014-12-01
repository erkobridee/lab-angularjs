define(function(require) {

  var angular = require('angular');
  require('angularResource');
  require('uiRouter');
  require('holder');


  return angular.module(
    // module name
    'dashboard',

    // module dependencies
    [
      'ngResource',

      'ui.router'
    ]
  );

});
