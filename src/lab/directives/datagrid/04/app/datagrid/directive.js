(function() {
  'use strict';

  angular.module( 'app' ).directive( 'datagrid', datagrid );

  //---

  // datagrid.$inject = [];

  function datagrid() {

    var scope = {
      titles: '=',
      data: '=',
      query: '='
    };

    //---

    var directive = {
      restrict: 'A',
      scope: scope,
      replace: true,
      transclude: true,
      templateUrl: 'app/datagrid/template.html',
      link: linkFunc,
      controller: DatagridController,
      controllerAs: 'vm'
    };

    return directive;

    //---

    function linkFunc( scope, element ) {

      addThead();

      //---

      function addThead() {
        var thead = [ ];
        thead.push( '<thead><tr>' );

        for ( var i = 0; i < scope.titles.length; i++ ) {
          thead.push( '<th>', scope.titles[ i ], '</th>' );
        }

        thead.push( '</tr></thead>' );

        //---

        element.find('table').append( thead.join( '' ) );
      }

    }

  }

  //---

  DatagridController.$inject = [ '$scope', '$filter' ];

  function DatagridController( $scope, $filter ) {
    var vm = this;

    //---

    vm.query = $scope.query;
    vm.items = $scope.data;
    vm.search = search;

    //---

    vm.search();

    //---

    function search() {
      $scope.data = $filter( 'filter' )( vm.items, function ( item ) {
        for ( var attr in item ) {
          if ( searchMatch( item[ attr ], vm.query ) ) {
            return true;
          }
        }
        return false;
      });
    }

    function searchMatch( haystack, needle ) {
      if ( !needle ) {
          return true;
      }

      haystack = haystack.toString().toLowerCase();
      needle = needle.toString().toLowerCase();

      return haystack.indexOf( needle ) !== -1;
    }

  }

})();
