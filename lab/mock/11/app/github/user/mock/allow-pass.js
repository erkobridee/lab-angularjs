define(
// require.js dependency injection
[
  'mock/backend'
],

// require.js module scope
function(backend) {
  'use strict';

  console.log('load allow pass github user mock');

  backend.addResource(

    // mock resource dependencies injection
    ['$httpBackend', 'regexpUrl',

  // mock resource definition
  function(httpBackend, regexpUrl) {

    // Allow GET users from GitHub API
    httpBackend.when(
      'GET',
      regexpUrl(/api\.github\.com\/users(\/)?([A-z0-9]+)?$/)
    ).passThrough();

  }]);


});
