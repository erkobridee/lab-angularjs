angular.module('app').controller(

  // controller name
  'UserCtrl',

  // dependency injection
  ['$scope', '$http',

  function($scope, $http) {

    var addedUsers = 0;

    $scope.users = {};

    $scope.addUser = function() {
      var names = [
        "Doug", "Scott", "Eric", "John", "Patricia",
        "Daniel", "JohnB", "Kate", "Matt"
      ];

      var sentData = {userName: names[addedUsers++ % 9]};

      $http.post('/local/users', sentData).success(function(data) {
        console.log(data);

        $scope.users[data.userId] = data;

        //console.log($scope.users);
      });
    };

    $http.get('/local/users?userName=aloha').success(function(data) {
      console.log('got userName aloha');
      console.log(data);
    });

    // Get a list of all the users
    $http.get('/local/users').success(function(data) {
      console.log("GOT all available users");
      console.log(data);
      $scope.users = data;
    });

}]);
