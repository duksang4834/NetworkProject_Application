angular.module('bookApp.controllers')

	.controller('MainListCtrl', function($scope, $state, $ionicSideMenuDelegate, $cordovaDevice, $http) {
		
		document.addEventListener('deviceReady', function () {
			var uuid = $cordovaDevice.getUUID();

			$http({
				method: 'POST',
				url: 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080/registerDevice',
				params: {
					account: 'test',
					device: uuid
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