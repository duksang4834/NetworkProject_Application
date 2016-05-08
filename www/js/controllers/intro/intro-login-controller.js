angular.module('bookApp.controllers')

	.controller('IntroLoginCtrl', function ($scope, $state) {

		$scope.goMain = function () {
			$state.go('main.list');
		};

	});
