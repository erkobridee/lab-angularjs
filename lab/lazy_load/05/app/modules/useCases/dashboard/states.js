define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .when('/dashboard', '/dashboard/overview'); // default


    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'master': { // load page layout
            templateUrl   : 'app/modules/useCases/dashboard/templates/layout.html',
            controller    : 'DashboardMainCtrl',
            controllerAs  : 'main'
          },
          'header@dashboard': {
            templateUrl   : 'app/modules/useCases/dashboard/templates/header.html'
          },
          'sidebar@dashboard': {
            templateUrl   : 'app/modules/useCases/dashboard/templates/sidebar.html',
            controller    : 'DashboardSidebarCtrl',
            controllerAs  : 'sidebar'
          }
        }
      })
      .state('dashboard.overview', {
        url: '/overview',
        views: {
          'content@dashboard': {
            templateUrl   : 'app/modules/useCases/dashboard/templates/overview.html',
            controller    : 'DashboardOverviewCtrl',
            controllerAs  : 'overview'
          }
        }
      })
      .state('dashboard.reports', {
        url: '/reports',
        views: {
          'content@dashboard': {
            templateUrl   : 'app/modules/useCases/dashboard/templates/reports.html',
            controller    : 'DashboardReportsCtrl',
            controllerAs  : 'reports'
          }
        }
      })
      .state('dashboard.analytics', {
        url: '/analytics',
        views: {
          'content@dashboard': {
            templateUrl   : 'app/modules/useCases/dashboard/templates/analytics.html',
            controller    : 'DashboardAnalyticsCtrl',
            controllerAs  : 'analytics'
          }
        }
      })
      .state('dashboard.export', {
        url: '/export',
        views: {
          'content@dashboard': {
            templateUrl   : 'app/modules/useCases/dashboard/templates/export.html',
            controller    : 'DashboardExportCtrl',
            controllerAs  : 'export'
          }
        }
      });

  }

});
