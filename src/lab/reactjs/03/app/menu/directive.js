(function() {
  'use strict';

  var Menu = React.createClass({

    getDefaultProps: function() {
      return { items: [] }
    },

    render: function() {
      var items = this.props.items.map( function( item, i ) {
        return MenuItem( { item: item } );
      });

      return React.DOM.ul( {}, items );
    }

  });

  //---

  var MenuItem = React.createClass({

    getDefaultProps: function() {
      return { item: {} }
    },

    render: function() {
      return React.DOM.li( {}, this.props.item );
    }

  });

  //---

  angular.module( 'app' ).directive( 'menu', menu );

  function menu() {

    var directive = {
      restrict: 'EA',
      scope: scope,
      link: link
    };

    return directive;

    //---

    var scope = {
      items: '='
    };

    function link( scope, el, attrs ) {

      scope.$watch( 'vm.items', function( newValue, oldValue ){

        React.renderComponent( Menu({
          items: newValue
        }), el[0] );

      });

    }

  }

})();
