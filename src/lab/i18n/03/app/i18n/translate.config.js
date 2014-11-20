
define(
// require.js dependency injection
[
	'./module',
	'./locale/pt',
	'./locale/en'
],

// require.js module scope
function(module, pt, en) {
  'use strict';

  		module.config(['$translateProvider', translateProvider]);
  
		function translateProvider($translateProvider) {

			$translateProvider
			  	.translations('en-US', en)
			  	.translations('pt-BR', pt)
			  	.preferredLanguage(navigator.language);
		}
		
});