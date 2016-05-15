angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $rootScope, $state, $ionicSideMenuDelegate, $http, $cordovaPush, $cordovaDevice) {
		// Ionic.io();
		var androidConfig = {
				'senderID': '170703260646'
			},iosConfig = {
				"badge": true,
	    		"sound": true,
	    		"alert": true
			},
			platform;


		document.addEventListener('deviceReady', function () {
			var pushConfig,
				options = {};

			platform = $cordovaDevice.getPlatform();

			if (platform === 'iOS') {
				pushConfig = iosConfig;
			}  else if (platform === 'Android') {
				pushConfig = androidConfig;
			}

			// $cordovaPush.unregister(options).then(function(result) {
			// 	console.log('unregister' + result);
   //    // Success!
   //  }, function(err) {
   //    // Error
   //  })

			$cordovaPush.register(pushConfig).then(function (deviceToken) {
				console.log(pushConfig);
				console.log('deviceToken:' + deviceToken);
				
				// $http({
				// 	method: 'POST',
				// 	url: 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080/registerDevice',
				// 	params: {
				// 		account: 'test',
				// 		device: deviceToken
				// 	}
				// });

			}, function (error) {
				console.log(error);
			});

			$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      		
	      		console.log(event);
	      		console.log(notification);

	      		switch(notification.event) {
			        case 'registered':
			          if (notification.regid.length > 0 ) {
			            console.log('registration ID = ' + notification.regid);
			            $http({
							method: 'POST',
							url: 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080/registerDevice',
							params: {
								account: 'test',
								device: notification.regid
							}
						});
			          }
			          break;

			        case 'message':
			          // this is the actual push notification. its format depends on the data model from the push server
			          alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
			          break;

			        case 'error':
			          alert('GCM error = ' + notification.msg);
			          break;

			        default:
			          		alert('An unknown GCM event has occurred');
			          		break;
			      }
	    	});


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