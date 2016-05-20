angular.module('bookApp.controllers')

  	.controller('RentSearchMainCtrl', function($scope, $state, Api, $rootScope) {
  		var x2js = new X2JS();

  		$scope.data = {
  			bookName: '',
  			display: 10
  		};

  		$scope.goMainList = function () {
			$state.go('main.list');
		};

		$scope.goSearchDetail = function (book) {
			$rootScope.bookBorrowed = book;
			$state.go('main.rentSearchDetail');
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