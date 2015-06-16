'use strict';

/**
 * @ngdoc function
 * @name weatherviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherviewApp
 */
angular.module('weatherviewApp')
	.controller('MainCtrl', ['$scope', '$http', '$moment', function ($scope, $http, $moment) {
		var APIkey = 'FORECAST_API_KEY'; // forecast.io API key
		var targetGeo = '32.718371,-117.162531'; // latitude, longitude
		var stationURL = 'https://api.forecast.io/forecast/' + APIkey + '/' + targetGeo + '?callback=JSON_CALLBACK';
		var iconArray = [
			{oIcon: 'clear-day',           wIcon: 'wi wi-day-sunny'},
			{oIcon: 'clear-night',         wIcon: 'wi wi-stars'},
			{oIcon: 'rain',                wIcon: 'wi wi-rain'},
			{oIcon: 'snow',                wIcon: 'wi wi-snow'},
			{oIcon: 'sleet',               wIcon: 'wi wi-sleet'},
			{oIcon: 'wind',                wIcon: 'wi wi-cloudy-gusts'},
			{oIcon: 'fog',                 wIcon: 'wi wi-fog'},
			{oIcon: 'cloudy',              wIcon: 'wi wi-cloudy'},
			{oIcon: 'partly-cloudy-day',   wIcon: 'wi wi-day-cloudy'},
			{oIcon: 'partly-cloudy-night', wIcon: 'wi wi-night-cloudy'}
		];
		$http.jsonp(stationURL)
		.success(function(data){
			var wRaw = data.currently;
			$scope.wHumidity = wRaw.humidity;
			$scope.wIcon = wRaw.icon;
			$scope.wOzone = wRaw.ozone;
			$scope.wPressure = wRaw.pressure;
			$scope.wSummary = wRaw.summary;
			$scope.wTemp = wRaw.temperature;
			$scope.wTime = $moment(wRaw.time, 'X').format('MMMM D, h:mma');
			$scope.wVisibility = wRaw.visibility;
			$scope.wWindBearing = wRaw.windBearing;
			$scope.wWindSpeed = wRaw.windSpeed;
			console.log($scope.wTime);
			console.log(wRaw); // debug
		});
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	}]); // end controller MainCtrl
