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
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
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
