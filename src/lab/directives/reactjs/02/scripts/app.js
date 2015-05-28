/*
  [Gist] sebmarkbage / ElementFactoriesAndJSX.md
  https://gist.github.com/sebmarkbage/d7bce729f38730399d28#comment-1377720
*/
(function() {
  'use strict';

  var MenuItemClass = React.createClass({

    getDefaultProps: function() {
      return {
        item: {}
      };
    },

    render: function() {
      return React.DOM.li( {}, this.props.item );
    }

  });

  var MenuItem = React.createFactory( MenuItemClass );

  //---

  var MenuClass = React.createClass({

    getDefaultProps: function() {
      return {
        items: []
      };
    },

    render: function() {
      var items = this.props.items.map( function( item, i ) {
        return new MenuItem({
          item: item
        });
      });

      return React.DOM.ul( {}, items );
    }

  });

  var Menu = React.createFactory( MenuClass );

  //---

  React.render( new Menu({
    items: [ 'Home', 'Dashboard', 'About' ]
  }), document.body );

})();
