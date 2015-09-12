require.config({

  paths: {
    angular: [
      '/cdn/ajax/libs/angular.js/1.4.5/angular.min'
    ],

    angularAria: [
      '/cdn/ajax/libs/angular.js/1.4.5/angular-aria.min'
    ],

    angularAnimate: [
      '/cdn/ajax/libs/angular.js/1.4.5/angular-animate.min'
    ],

    angularMaterial: [
      '/cdn/ajax/libs/angular_material/0.11.0/angular-material.min'
    ]
  },

  shim: {
    'angular': {
      exports: 'angular'
    },

    'angularAria': {
      deps: ['angular']
    },

    'angularAnimate': {
      deps: ['angular']
    },

    'angularMaterial': {
      deps: ['angularAria', 'angularAnimate']
    }
  },

  priority: [
    'angular'
  ],

  deps: ['./ng-start']

});
