require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
      '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.1/jquery.min'      
    ],

    // http://code.angularjs.org/1.2.1/
    angular: [       
      '/cdn/ajax/libs/angular.js/1.2.1/angular.min'
    ],

    angularRoute: [
      '/cdn/ajax/libs/angular.js/1.2.1/angular-route.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.2.1/angular-resource.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },

    'angularRoute': {
      deps: ['angular']
    },

    'angularResource': {
      deps: ['angular']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./main/bootstrap']

});
