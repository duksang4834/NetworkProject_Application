angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $state, $ionicScrollDelegate) {

  	$scope.goRentSearch = function () {

			$state.go('rentSearch.Main');
		};

	$scope.goRegisterSearch = function () {

			$state.go('registerSearch.Main');
		};

	$scope.toggleLeft = function() {
    		$ionicSideMenuDelegate.toggleLeft();
  		};

  });