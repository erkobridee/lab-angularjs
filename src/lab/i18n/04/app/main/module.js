define(function(require){
    'use strict';

    var angular = require('angular');                  	
          
    return angular.module('main',  [
                  require('./../i18n/package').name,
                  require('./../home/package').name,
                  require('./../about/package').name
                ])
			    .config(i18nConfig);
			  
				i18nConfig.$inject = [ '$translateProvider', '$translatePartialLoaderProvider' ];

				function i18nConfig($translateProvider, $translatePartialLoaderProvider) {			
								
					$translateProvider
						.useLoader('$translatePartialLoader', {
							urlTemplate: 'app/i18n/{part}/{lang}.json'
						})
						.determinePreferredLanguage();
				}

});