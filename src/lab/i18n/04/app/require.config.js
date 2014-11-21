require.config({

	paths: {
		
		angular: [
	      	'/cdn/ajax/libs/angular.js/1.3.1/angular.min'
	    ],

	    angularRoute: [
	      	'/cdn/ajax/libs/angular.js/1.2.15/angular-route.min'
	    ],

	    angularTranslate: [
	    	'//rawgit.com/PascalPrecht/bower-angular-translate/master/angular-translate.min'
	    ],

	    angularTranslateLoaderPartial: [
	    	'//rawgit.com/PascalPrecht/bower-angular-translate-loader-partial/master/angular-translate-loader-partial.min'
	    ]
	  
	},

	shim: {

		'angular': {
			exports: 'angular'
		},

		'angularRoute': {
	      	deps: ['angular']
	    },

		'angularTranslate': {
			deps: ['angular']
		},

		'angularTranslateLoaderPartial': {
			deps: ['angularTranslate']
		}

	},

	priority: [
		'angular'
	],

	deps: ['./ng.app']

});
