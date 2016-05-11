angular.module('bookApp.controllers')

	.controller('IntroLoginCtrl', function ($scope, $state, $http) {

		$scope.data = {
			account: '',
			password: ''
		};

		$scope.goMain = function () {

			$http({
				method: 'GET',
				url: 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080/login',
				params: {
					account: $scope.data.account,
					password: $scope.data.password
				}
			}).success(function (response) {
				console.log(response);
				$state.go('main.list');
			});
		};

		$scope.goSignup = function () {
			$state.go('intro.signup');
		};

	});
