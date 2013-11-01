angular.module('app').factory(

  // resource name
  'GitHubUsersResource', 

  // dependency injection
  ['$resource', 

function($resource) {

  var user = $resource(
    'https://api.github.com/users/:login'
  ); 

  return user;

}]);