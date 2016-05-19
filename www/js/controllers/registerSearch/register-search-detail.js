angular.module('bookApp.controllers')

  .controller('RegisterSearchDetailCtrl', function($scope, $state, $rootScope, $http) {
  		$scope.item = $rootScope.bookClicked;

  	  	$scope.goRegisterSearchMain = function () {
			$state.go('registerSearch.Main');
		};

		$scope.registerBook = function () {
			console.log($scope.item);
			$http({
				method: 'POST',
				url: '/api/registerBook',
				params: {
					account: 'test',
					price: '1000',
					start_date: (new Date()).getTime(),
					end_date: '1',
					cleaness: '1',
					title: $scope.item.title,
					author: $scope.item.author,
					image: $scope.item.image,
					publisher: $scope.item.publisher || undefined,
					pubdate: $scope.item.pubdate || '0'
				}
			});
		};
  });