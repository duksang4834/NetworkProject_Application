angular.module('bookApp.controllers')

	.controller('IntroLoginCtrl', function ($scope, $http) {

		$scope.test = function () {
			console.log('haha');
			return $http({
				method: 'GET',
				url: 'ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080'
			});
		};
	});
angular.module('bookApp.controllers')

	.controller('IntroLoginCtrl2', function ($scope) {

	});
