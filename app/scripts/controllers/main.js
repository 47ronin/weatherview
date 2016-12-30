'use strict';

/**
 * @ngdoc function
 * @name weatherviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherviewApp
 */
angular.module('weatherviewApp')
		var APIkey = 'FORECAST_API_KEY'; // forecast.io API key
	.controller('MainCtrl', ['$q','$scope', '$http', '$moment', '$filter', function ($q, $scope, $http, $moment, $filter) {
				targetGeo		= '32.718371,-117.162531', // latitude, longitude
				wOptions		= '&exclude=minutely,hourly,daily,flags', // API exclusions
				stationURL	= 'https://api.forecast.io/forecast/' + APIkey + '/' + targetGeo + '?callback=JSON_CALLBACK' + wOptions,
				iconArray		= [
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
		$q.all([$http.jsonp(stationURL)])
		.then(function(promise){
			var wRaw = promise[0].data.currently,
			searchIcon = $filter('filter')(iconArray, {oIcon: wRaw.icon});
			$scope.wIcon = searchIcon[0].wIcon;
			$scope.wHumidity = wRaw.humidity;
			$scope.wOzone = wRaw.ozone;
			$scope.wPressure = wRaw.pressure;
			$scope.wSummary = wRaw.summary;
			$scope.wTemp = Math.round(wRaw.temperature);
			$scope.wTime = $moment(wRaw.time, 'X').format('MMMM D, h:mma');
			$scope.wVisibility = wRaw.visibility;
			$scope.wWindBearing = wRaw.windBearing;
			$scope.wBIcon = 'wi wi-wind-default _' + $scope.wWindBearing + '-deg';
			$scope.wBIconRotate = 'rotate(' + $scope.wWindBearing + 'deg)';
			$scope.wWindSpeed = wRaw.windSpeed.toFixed(1);
			if ($scope.wWindSpeed < 1.2) {
				$scope.bWs = 'wi wi-beafort-0';
			} else if ($scope.wWindSpeed < 3.7) {
				$scope.bWs = 'wi wi-beafort-1';
			} else if ($scope.wWindSpeed < 8) {
				$scope.bWs = 'wi wi-beafort-2';
			} else if ($scope.wWindSpeed < 13) {
				$scope.bWs = 'wi wi-beafort-3';
			} else if ($scope.wWindSpeed < 19.3) {
				$scope.bWs = 'wi wi-beafort-4';
			} else if ($scope.wWindSpeed < 25.5) {
				$scope.bWs = 'wi wi-beafort-5';
			} else if ($scope.wWindSpeed < 32) {
				$scope.bWs = 'wi wi-beafort-6';
			} else if ($scope.wWindSpeed < 39) {
				$scope.bWs = 'wi wi-beafort-7';
			} else if ($scope.wWindSpeed < 47) {
				$scope.bWs = 'wi wi-beafort-8';
			} else if ($scope.wWindSpeed < 56) {
				$scope.bWs = 'wi wi-beafort-9';
			} else if ($scope.wWindSpeed < 65) {
				$scope.bWs = 'wi wi-beafort-10';
			} else if ($scope.wWindSpeed < 75) {
				$scope.bWs = 'wi wi-beafort-11';
			} else {
				$scope.bWs = 'wi wi-beafort-12';
			}
		})
		.error(function(){
			console.log('Problem fetching weather data');
		});
	}]); // end controller MainCtrl
