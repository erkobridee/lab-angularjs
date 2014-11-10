define(
// require.js dependency injection
[
  '../module'
],

// require.js module scope
function(module) {
  'use strict';

  module.directive(

    // directive name
    'depWelcome',

  // directive definition
  function() {

    return {

      restrict: 'EA',
        // E - Element <dep-welcome>User</dep-welcome>
        // A - Attribute <div data-dep-welcome>User</div>
        // C - Class <div class="dep-welcome">User</div>
      //transclude: false,

      link: function(scope, element, attrs) {
        var html = element.html();
        //console.log('depWelcome directive');
        element.html('Welcome: <strong>' + html + '</strong>');
      }

    };

  });

});
