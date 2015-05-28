/*
  [Gist] sebmarkbage / ElementFactoriesAndJSX.md
  https://gist.github.com/sebmarkbage/d7bce729f38730399d28#comment-1377720
*/
(function() {
  'use strict';

  var MenuItemClass = React.createClass({

    getDefaultProps: function() {
      return { item: {} };
    },

    render: function() {
      return React.DOM.li( {}, this.props.item );
    }

  });

  var MenuItem = React.createFactory( MenuItemClass );

  //---

  var MenuClass = React.createClass({

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

  var Menu = React.createFactory( MenuClass );

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

        React.render( new Menu({
          items: newValue
        }), el[0] );

      });

    }

  }

})();
