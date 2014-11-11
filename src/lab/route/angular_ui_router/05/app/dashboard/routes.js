define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(

    // dependencies injection
    ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider
        .when('/dashboard', '/dashboard/overview'); // default


      $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          views: {
            'master': { // load page layout
              controller: 'DashboardMainCtrl',
              templateUrl: 'app/dashboard/templates/layout.html'
            },
            'header@dashboard': {
              templateUrl: 'app/dashboard/templates/header.html'
            },
            'sidebar@dashboard': {
              controller: 'DashboardSidebarCtrl',
              templateUrl: 'app/dashboard/templates/sidebar.html'
            }
          }
        })
        .state('dashboard.overview', {
          url: '/overview',
          views: {
            'content@dashboard': {
              controller: 'DashboardOverviewCtrl',
              templateUrl: 'app/dashboard/templates/overview.html'
            }
          }
        })
        .state('dashboard.reports', {
          url: '/reports',
          views: {
            'content@dashboard': {
              controller: 'DashboardReportsCtrl',
              templateUrl: 'app/dashboard/templates/reports.html'
            }
          }
        })
        .state('dashboard.analytics', {
          url: '/analytics',
          views: {
            'content@dashboard': {
              controller: 'DashboardAnalyticsCtrl',
              templateUrl: 'app/dashboard/templates/analytics.html'
            }
          }
        })
        .state('dashboard.export', {
          url: '/export',
          views: {
            'content@dashboard': {
              controller: 'DashboardExportCtrl',
              templateUrl: 'app/dashboard/templates/export.html'
            }
          }
        });

  }]);

});
