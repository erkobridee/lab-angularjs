angular.module('app.dep').factory(
  
  // factory name
  'DependencyFactory', 

  // dependencies injection
  [ //,

function() {

  // private
  function checkMsg(msg) {
    return msg || 'Hello';
  }

  // public
  return {
    exciteText: function(msg) {
      return checkMsg(msg) + '!!!';
    }
  };

}]);