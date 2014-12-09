(function() {
  'use strict';

  angular.module( 'app' ).directive( 'contact', contact );

  //---

  contact.$inject = [ ];

  //---

  function contact() {

    var scope = {
      'ngModelName': '=',
      'ngModelEmail': '=',
      'onSubmitForm': '&'
    };

    //---

    var directive = {
      restrict: 'E',
      scope: scope,
      compile: compile
    };

    return directive;

    //---

    function compile( element, attrs ) {

      var ContactForm = React.createClass({
        handleChange: handleChange,
        render: render
      });

      var compileReturn = compileFunc;

      return compileReturn;

      //---

      function compileFunc( scope, element, attrs ) {
        React.render( new ContactForm({
          scope: scope
        }), element[0] );
      }

      //---

      function handleChange(model) {
        /*jshint validthis:true */
        var scope = this.props.scope;

        return function(event) {
          scope.$apply(function () {
            scope[model] = event.target.value;
          });
        };
      }

      function render() {
        /*jshint validthis:true */

        return  React.DOM.form({
            onSubmit: this.props.scope.onSubmitForm
          },

          //---

          React.DOM.div( {},

            React.DOM.label( { htmlFor: 'nome' }, 'Name: ' ),

            React.DOM.input({
              id: 'nome',
              placeholder: 'Type your name',
              onChange: this.handleChange('ngModelName')
            })

          ),

          //---

          React.DOM.div( {},

            React.DOM.label( { htmlFor: 'email' }, 'Email: ' ),

            React.DOM.input({
              id: 'email',
              placeholder: 'Type your email',
              onChange: this.handleChange('ngModelEmail')
            })

          ),

          //---

          React.DOM.div( {}, React.DOM.button( {}, 'Submit' ) )

        );
      }

    }

  }
})();
