angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $state, $ionicSideMenuDelegate, $http, $cordovaDevice, $rootScope, Api, User) {

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

  		// $scope.moveScroll = function (e) {
  		// 	var position = e.detail.scrollTop,
  		// 	target = document.getElementById('add-button1');
  		// 	target.style.top = position + 'px';
  		// };
	});