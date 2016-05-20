angular.module('bookApp.controllers')

	.controller('IntroLoginCtrl', function ($scope, $state, $http, Api, User) {

		$scope.data = {
			account: '',
			password: ''
		};

		$scope.goMain = function () {

			Api.login($scope.data).success(function (response1) {
				Api.getUserInfo($scope.data).success(function (response2) {
					User.userInfo = response2;
					console.log(User.userInfo);
					$state.go('main.list');
				}).error(function (error) {

				});
			}).error(function (error) {
				// login error
			});
		
		};

		$scope.goSignup = function () {
			$state.go('intro.signup');
		};

	});