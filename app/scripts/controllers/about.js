'use strict';

/**
 * @ngdoc function
 * @name weatherviewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherviewApp
 */
angular.module('weatherviewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
