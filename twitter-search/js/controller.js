var Ctrl = (function() {

  function Ctrl() {}

  Ctrl.prototype.Search = function($scope, TwitterResource) {

      $scope.doSearch = function() {
        var toSearch = $scope.searchField || 'soudev'; 

        TwitterResource.get(
          {q: toSearch}, function(res) {
            $scope.twitterResult = res;

            console.log(res);
          }
        );
      }

      // criar funcionalidade para realizar o processamento do texto

  }

  return Ctrl;

})();

var ctrl = new Ctrl();