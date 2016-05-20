angular.module('bookApp.controllers')

  	.controller('RegisterSearchMainCtrl', function($scope, $state, $http, $rootScope, Api) {
  		var x2js = new X2JS();

  		$scope.data = {
  			bookName: '',
  			display: 10
  		};

	  	$scope.goMainList = function () {
			$state.go('main.list');
		};

		$scope.goSearchDetail = function (book) {
			$rootScope.bookClicked = book;
			$state.go('main.registerSearchDetail');
		};

		$scope.searchBooks = function () {
			if (!$scope.data.bookName) {
				// error
			} else {
				Api.searchBook($scope.data).success(function (response) {
					var xmlText = response;
					
					$scope.bookList = x2js.xml_str2json( xmlText ).rss.channel.item;
				}).error(function (error) {

				});
			}
		};

  	});