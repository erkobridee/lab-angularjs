angular.module('modules.dep1').directive(

  // directive name
  'dep1Welcome', 

// directive definition
function() {

  return {

    restrict: 'EA', 
      // E - Element <dep1-welcome>User</dep-welcome> 
      // A - Attribute <div data-dep1-welcome>User</div>
      // C - Class <div class="dep1-welcome">User</div>
    //transclude: false,
    
    link: function(scope, element, attrs) {
      var html = element.html();
      //console.log('depWelcome directive');
      element.html('Welcome: <strong>' + html + '</strong>');
    }

  };

});