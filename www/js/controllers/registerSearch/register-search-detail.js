angular.module('bookApp.controllers')

  .controller('RegisterSearchDetailCtrl', function($scope, $state, $rootScope, Api) {
  		$scope.item = $rootScope.bookClicked;

  	  	$scope.goRegisterSearchMain = function () {
			$state.go('registerSearch.Main');
		};

		$scope.registerBook = function () {
			$scope.item.price = 1000;
			$scope.item.start_date = (new Date()).getTime();
			$scope.item.end_date = $scope.item.start_date + 1000;
			$scope.item.cleanness = 1;
			console.log('item', $scope.item);

			Api.registerBook($scope.item).success(function (response) {
				console.log(response);
			}).error(function (error) {

			});

			// $http({
			// 	method: 'POST',
			// 	url: '/api/registerBook',
			// 	params: {
			// 		account: 'test',
			// 		price: 1000,
			// 		start_date: (new Date()).getTime(),
			// 		end_date: (new Date()).getTime() + 1000,
			// 		cleanness: 1,
			// 		title: $scope.item.title,
			// 		author: $scope.item.author,
			// 		image: $scope.item.image,
			// 		publisher: $scope.item.publisher,
			// 		pubdate: $scope.item.pubdate
			// 	}
			// });
		};
  });