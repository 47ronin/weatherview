'use strict';

/**
 * @ngdoc overview
 * @name weatherviewApp
 * @description
 * # weatherviewApp
 *
 * Main module of the application.
 */
angular
  .module('weatherviewApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-momentjs'
  ])
  .config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
