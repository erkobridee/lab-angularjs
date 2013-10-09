angular.module('app.dep').directive(

  // directive name
  'depWelcome', 

// directive definition
function() {

  return {

    restrict: 'EA', 
      // E - Element <depWelcome>User</depWelcome> 
      // A - Attribute <div data-dep-welcome>User</div>
    //transclude: false,
    
    link: function(scope, element, attrs) {
      var html = element.html();
      element.html('Welcome: <strong>' + html + '</strong>');
    }

  };

});