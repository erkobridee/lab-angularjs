define(
// require.js dependency injection
[
  'angular',

  '../moduleA/package',
  '../home/package',
  '../about/package',
  '../github/package',
  '../pageWithoutController/package'

],

// require.js module scope
function(
  angular,
  moduleA, home, about, github, pageWithoutController
) {
  'use strict';

  // module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      moduleA.name,
      home.name,
      about.name,
      github.name,
      pageWithoutController.name
    ]

  );


});
