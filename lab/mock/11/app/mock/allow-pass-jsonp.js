define(
// require.js dependency injection
[
  'angular',
  'angularMocksBackend'
], 

// require.js module scope
function(ng) {
  'use strict';

  console.log('load jsonp allow pass mock');

  ng.mock.backend.addResource(function(angular, httpBackend, regexpUrl) {
    
    // Allow JSONP to pass to external services (ie Solr) 
    httpBackend.when('JSONP', regexpUrl(/http:\/\/.*/)).passThrough();

  });


});