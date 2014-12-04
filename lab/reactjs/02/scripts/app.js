(function() {
  'use strict';

  var MenuItem = React.createClass({

    getDefaultProps: function() {
      return {
        item: {}
      };
    },

    render: function() {
      return React.DOM.li( {}, this.props.item );
    }

  });

  //---

  var Menu = React.createClass({

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

  React.renderComponent( new Menu({
    items: [ 'Home', 'Dashboard', 'About' ]
  }), document.body );

})();
