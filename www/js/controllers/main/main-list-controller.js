angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $state, $ionicScrollDelegate, $cordovaDevice) {

  	$scope.goRentSearch = function () {

			$state.go('rentSearch.Main');
		};

	$scope.goRegisterSearch = function () {

			$state.go('registerSearch.Main');
		};

	$scope.toggleLeft = function() {
    		$ionicSideMenuDelegate.toggleLeft();
  		};

		var uuid = $cordovaDevice.getUUID();

	});