angular.module('bookApp.controllers')

  	.controller('MainCtrl', function($scope, $state) {

  		$scope.$state = $state;
  		
  		console.log($state.current.name);
  		$scope.goLogout = function () {
			$state.go('intro.login');
		};

		$scope.goRentSearch = function () {
			$state.go('main.rentSearch');
		};

		$scope.goRegisterSearch = function () {
			$state.go('main.registerSearch');
		};

  	});