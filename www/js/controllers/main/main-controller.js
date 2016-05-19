angular.module('bookApp.controllers')

  .controller('MainCtrl', function($scope, $state) {

  	$scope.goLogout = function () {
			$state.go('intro.login');
		};

  });