(function() {
  'use strict';

  angular.module( 'app' ).factory( 'ProfileFactory', ProfileFactory );

  //---

  ProfileFactory.$inject = [ ];

  function ProfileFactory() {

    var factory = {
      contains: contains
    };

    return factory;

    //---

    function contains( value, lista ) {
      return ~lista.indexOf( value );
    }

  }

})();
