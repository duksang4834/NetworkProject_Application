angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $state, $ionicSideMenuDelegate, $http, $cordovaDevice, $rootScope, Api, User) {
		// Ionic.io();
		var androidConfig = {
				'senderID': '170703260646'
			},iosConfig = {
				"badge": true,
	    		"sound": true,
	    		"alert": true
			},
			platform;

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

		// Ionic.io();
		// var push = new Ionic.Push({
		// 	'debug': true,
		// 	'onNotification': function(notification) {
  //   			console.log(notification);
		// 	 },
		// });

		// push.register(function (device) {
		// 	$http({
		// 		method: 'POST',
		// 		// url: 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080/registerDevice',
		// 		url: '/api/registerDevice',
		// 		params: {
		// 			account: 'test',
		// 			device: device._token
		// 		}
		// 	}).success(function (response) {
		// 		console.log(response);
		// 	}).error(function (error) {
		// 		console.log(error);
		// 	});
		// 	console.log(device);
		// });


		$scope.toggleLeft = function() {
    		$ionicSideMenuDelegate.toggleLeft();
  		};

  		// $scope.moveScroll = function (e) {
  		// 	var position = e.detail.scrollTop,
  		// 	target = document.getElementById('add-button1');
  		// 	target.style.top = position + 'px';
  		// };
	});