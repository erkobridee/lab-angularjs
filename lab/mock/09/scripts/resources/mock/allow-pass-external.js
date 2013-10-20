angular.mock.backend.addResource(function(angular, httpBackend, regexpUrl) {
  'use strict';

  // Allow JSONP to pass to external services (ie Solr) 
  httpBackend.when('JSONP', regexpUrl(/http:\/\/.*/)).passThrough();

  // Allow GET users from GitHub API
  //httpBackend.when('GET', regexpUrl(/api\.github\.com\/users(\/)?([A-z0-9]+)?$/)).passThrough();

});