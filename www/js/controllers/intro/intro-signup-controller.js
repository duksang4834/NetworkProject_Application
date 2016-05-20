angular.module('bookApp.controllers')

  	.controller('IntroSignupCtrl', function($scope, $http, $state) {
  		
  		$scope.data = {
  			account: '',
  			password: '',
  			username: '',
  			phone: ''
  		};
  		
  		$scope.signup = function () {
  			$http({
  				method: 'POST',
  				url: 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080/signup',
  				params: {
  					account: $scope.data.account,
  					password: $scope.data.password,
  					username: $scope.data.username,
  					phone: $scope.data.phone
  				}
  			}).success(function (response, code) {
  				console.log(response);
  				console.log(code === 200);
  				if (code === 200) {
  					if (response.success) {
  						$state.go('intro.login');
  					} else {
  						// error msg
  					}
  				} else {
  					return;
  					// error
  				}
  			});
  		};
  	});