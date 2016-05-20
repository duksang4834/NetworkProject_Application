angular.module('bookApp.controllers')

	.controller('IntroLoginCtrl', function ($scope, $state, $http, Api, User, Util) {

		$scope.data = {
			account: undefined,
			password: undefined
		};

		function init () {
			var loginData = {
				account: Util.localStorage.get('account'),
				password: Util.localStorage.get('password')
			}

			if (loginData.account) {
				$scope.data = loginData;
				$scope.goMain();
			}
		}

		$scope.goMain = function () {

			Api.login($scope.data).success(function (response1) {
				
				Util.localStorage.set('account', $scope.data.account);
				Util.localStorage.set('password', $scope.data.password);

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

		// init();
	});