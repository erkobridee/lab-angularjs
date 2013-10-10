(function() {
  'use strict';

  var service = (function () {

    // class definition
    function ClassDef() {}

    // private
    function checkMsg(msg) {
      return msg || 'Hello';
    }

    // public
    ClassDef.prototype.questionText = function(msg) {
      return checkMsg(msg) + '???';
    };

    return ClassDef; 

  })();

  angular.module('app.dep').service(

    // service name
    'DependencyService', 

    // dependencies injection
    [ '$http', //,

    service // when service called will return new instance

  ]);

})();