angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $cordovaDevice) {

		var uuid = $cordovaDevice.getUUID();

	});