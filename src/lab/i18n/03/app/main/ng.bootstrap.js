define(
		[
		  'angular',
          './module',
          './routes'
		],


		function(ng, module) {
		  'use strict';

		  ng.element(document).ready(function() {

		    ng.bootstrap(document, [module.name]);

		  });

});