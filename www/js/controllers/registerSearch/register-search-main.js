angular.module('bookApp.controllers')

  	.controller('RegisterSearchMainCtrl', function($scope, $state, $http, $rootScope) {
  		var naverAPIKey = 'c1b406b32dbbbbeee5f2a36ddc14067f',
  			x2js = new X2JS();

  		$scope.data = {
  			bookName: ''
  		};

	  	$scope.goMainList = function () {
			$state.go('main.list');
		};

		$scope.goSearchDetail = function (book) {
			$rootScope.bookClicked = book;
			$state.go('main.registerSearchDetail');
		};

		$scope.searchBooks = function () {
			var url = '/book';

			if (!$scope.data.bookName) {
				// error
			} else {
				$http({
					method: 'GET',
					url: url,
					headers: {
						'X-Naver-Client-Id': '3ENQzgkibzsEXbOY3sqy',
						'X-Naver-Client-Secret': '9UTN7mBN5W',
						'Content-Type': 'application/xml'
					},
					params: {
						target: 'book',
						query: $scope.data.bookName,
						display: 10
					}
				}).success(function (response) {
					var xmlText = response;
					$scope.bookList = x2js.xml_str2json( xmlText ).rss.channel.item;
					console.log($scope.bookList);
				}).error(function (error) {

				});
			}
		};

  	});