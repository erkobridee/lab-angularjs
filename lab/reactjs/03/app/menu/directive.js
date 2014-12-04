(function() {
  'use strict';

  var MenuItem = React.createClass({

    getDefaultProps: function() {
      return { item: {} };
    },

    render: function() {
      return React.DOM.li( {}, this.props.item );
    }

  });

  //---

  var Menu = React.createClass({

    getDefaultProps: function() {
      return { items: [] };
    },

    render: function() {
      var items = this.props.items.map( function( item, i ) {
        return new MenuItem( { item: item } );
      });

      return React.DOM.ul( {}, items );
    }

  });

  //---

  angular.module( 'app' ).directive( 'menu', menu );

  function menu() {

    var scope = {
      items: '='
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      link: link
    };

    return directive;

    //---

    function link( scope, el, attrs ) {

      scope.$watch( 'items', function( newValue, oldValue ){

        React.renderComponent( new Menu({
          items: newValue
        }), el[0] );

      });

    }

  }

})();
