angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $state, $ionicSideMenuDelegate, $http, $cordovaDevice) {
		// Ionic.io();
		var androidConfig = {
				'senderID': '170703260646'
			},iosConfig = {
				"badge": true,
	    		"sound": true,
	    		"alert": true
			},
			platform;


		Ionic.io();
		var push = new Ionic.Push({
			'debug': true,
			'onNotification': function(notification) {
    			console.log(notification);
			 },
		});

		push.register(function (device) {
			$http({
				method: 'POST',
				url: 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080/registerDevice',
				// url: '/api/registerDevice',
				params: {
					account: 'test',
					device: device._token
				}
			}).success(function (response) {
				console.log(response);
			}).error(function (error) {
				console.log(error);
			});
			console.log(device);
		});

  		$scope.goRentSearch = function () {
			$state.go('rentSearch.Main');
		};

		$scope.goRegisterSearch = function () {
			$state.go('registerSearch.Main');
		};

		$scope.toggleLeft = function() {
    		$ionicSideMenuDelegate.toggleLeft();
  		};

  		$scope.moveScroll = function (e) {
  			var position = e.detail.scrollTop,
  			target = document.getElementById('add-button');
  			target.style.top = position + 'px';
  		};
	});