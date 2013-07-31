var app = angular.module('app', []);

app.controller(
  
  // controller name
  'ctrl.Hello', 
  
  // dependency injection
  ['$scope', 

function(scope) {

  scope.hello = 'Angular JS - Hello World 05';

}]);