(function() {
  'use strict';

  var ContactForm = React.createClass({

    handleChange: function(callbackName) {
      var controller = this.props.controller;
      return function(event) {
        controller[callbackName](event.target.value);
      };
    },

    //---

    render: function() {
      var controller = this.props.controller;
      return  React.DOM.form({},

        //---

        React.DOM.div( {},

          React.DOM.label({
            htmlFor: 'nome'
          }, 'Name: ' ),

          React.DOM.input({
            id: 'nome',
            placeholder: 'Type your name',
            onChange: this.handleChange('setNome')
          })

        ),

        //---

        React.DOM.div( {},

          React.DOM.label({
            htmlFor: 'email'
          }, 'Email: ' ),

          React.DOM.input({
            id: 'email',
            placeholder: 'Type your email',
            onChange: this.handleChange('setEmail')
          })

        ),

        //---

        React.DOM.div( {}, React.DOM.button( {
          onClick: controller.onSubmitForm
        }, 'Submit' ) )

      );
    }
  });

  //---

  angular.module( 'app' ).directive( 'contact', contact );

  //---

  contact.$inject = [ 'Scopes' ];

  //---

  function contact(Scopes) {

    var directive = {
      restrict: 'EA',
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc( scope, element, attrs ) {

      var mainCtrl = Scopes.get( 'MainCtrl' );

      var ContactOptions = {
        controller: mainCtrl
      };

      //---

      React.render( new ContactForm( ContactOptions ), element[0] );

    }

  }
})();
