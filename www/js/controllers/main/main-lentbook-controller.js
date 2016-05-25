angular.module('bookApp.controllers')

  	.controller('MainLentbookCtrl', function($scope, $state, $rootScope, Api) {

  		$scope.book = $rootScope.myLentBookData;
  		console.log($scope.book);

  		$scope.returnBook = function () {
  			var data = {
  				book_id: $scope.book.id
  			};
  			Api.returnBook(data).success(function (response) {
  				$state.go('main.list');
  			}).error(function (error) {
  				console.log(error);
  			})
  		};
  	});