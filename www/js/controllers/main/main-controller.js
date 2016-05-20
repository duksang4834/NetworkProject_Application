angular.module('bookApp.controllers')

  .controller('MainCtrl', function($scope, $state) {

  		$scope.goLogout = function () {
			$state.go('intro.login');
		};

		$scope.goRentSearch = function () {
			$state.go('rentSearch.Main');
		};

		$scope.goRegisterSearch = function () {
			$state.go('main.registerSearch');
		};

  });