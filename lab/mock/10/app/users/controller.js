angular.module('app').controller(
  
  // controller name
  'UserCtrl',
  
  // dependency injection
  ['$scope', 'UsersResource', 

  function($scope, resource) { 

    var addedUsers = 0;

    $scope.users = {};

    $scope.addUser = function() {
      var names = [
        "Doug", "Scott", "Eric", "John", "Patricia",
        "Daniel", "JohnB", "Kate", "Matt"
      ];

      var newUser = {userName: names[addedUsers++ % 9]};
      
      resource.post(newUser).then(
        // success
        function(data) {
          console.log(data);
          $scope.users[data.userId] = data;
        },
        // fail
        function(error) {
          console.log(error);
        }
      );

    };

    var errorHandler = function(error) {
      console.log(error);
    };

    resource.getUserName('aloha').then(
      // success
      function(data) {
        console.log('got userName aloha');
        console.log(data);
      },
      errorHandler
    );

    resource.getAll().then(
      // success
      function(data) {
        console.log("GOT all available users");
        console.log(data);
        $scope.users = data; 
      },
      errorHandler
    );

}]);