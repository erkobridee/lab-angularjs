(function() {
  'use strict';

  angular.module( 'app' ).service( 'stockService', stockService );

  //---

  stockService.$inject = [ '$http' ];

  function stockService( $http ) {
    /*jshint validthis:true */
    var service = this;

    service.getStockData = getStockData;

    //---

    function getStockData() {
      return $http.get( 'app/stock/data.json' );
    }

  }

})();
