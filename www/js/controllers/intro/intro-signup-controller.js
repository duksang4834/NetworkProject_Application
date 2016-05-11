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
  				url: '/api/signup',
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