(function() {
  'use strict';

  angular
    .module('app')
    .factory('MultiTranscludeService', MultiTranscludeService);

    //---

    // MultiTranscludeService.$inject = [];
    function MultiTranscludeService() {

      var service = {
        transclude: transcludeService
      };

      //---

      function transcludeService(el, transcludeFn) {
        console.log(el);

        transcludeFn(function(clone) {
          angular.forEach(clone, function(cloneEl) {

            var destinationId, destination, hasAttribute = false;
            if(cloneEl.attributes) {
              destinationId = cloneEl.attributes["transclude-to"].value;

              console.log('[transclude-id="'+ destinationId +'"]');

              destination = angular.element(
                el[0].querySelector('[transclude-id="'+ destinationId +'"]')
              );

              console.log( destination );

              hasAttribute = true;
            }

            if(hasAttribute && destination.length) {
              destination.append(cloneEl);
            } else {
              cloneEl.remove();
            }
          });
        });
      }

      //---

      return service;

    }

})();
