define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(i18nConfig);
  
	i18nConfig.$inject = [ '$translateProvider', '$translatePartialLoaderProvider' ];

	function i18nConfig($translateProvider, $translatePartialLoaderProvider) {			
		$translatePartialLoaderProvider.addPart('core');
					
		$translateProvider.useLoader('$translatePartialLoader', {
			urlTemplate: 'app/i18n/{part}/{lang}.json'
		});
					
		$translateProvider.determinePreferredLanguage();
	}

});
