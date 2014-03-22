angular.module('modules.dep1').factory(

  // factory name
  'Dep1Factory',

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
