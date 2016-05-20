angular.module('bookApp.controllers')

  	.controller('IntroSignupCtrl', function($scope, $http, $state, Api) {
  		
  		$scope.data = {
  			account: '',
  			password: '',
  			username: '',
  			phone: ''
  		};
  		
  		$scope.signup = function () {
        Api.signup($scope.data).success(function (response, code) {
          if (code === 200 && response.success) {
            $state.go('intro.login');
          } else {
            // signup error
          }
        }).error(function (error) {

        });
  		};
      
  	});