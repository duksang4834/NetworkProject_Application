angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $state, $ionicSideMenuDelegate, $http, $cordovaDevice, $rootScope, Api, User, $ionicPopup) {

		Api.searchMyBook().success(function (response) {
			$scope.items = response;
			console.log($scope.items);
		}).error(function (err) {
			if(err) {
				console.log(err)
			}
		})
		$rootScope.push.register(function (device) {
			var data = {
				account: User.userInfo.account,
				device: device._token
			};
			Api.registerDevice(data).success(function (response) {

			}).error(function (error) {

			});
		});

		$scope.toggleLeft = function() {
    		$ionicSideMenuDelegate.toggleLeft();
  		};

  		$scope.goDetailBook = function (book) {
  			$state.go('main.mybook')
  		};
	});