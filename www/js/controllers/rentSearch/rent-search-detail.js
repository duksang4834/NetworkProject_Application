angular.module('bookApp.controllers')

  	.controller('RentSearchDetailCtrl', function($scope, $state, Api, $rootScope, $ionicPopup, User) {
  		var book = $rootScope.bookBorrowed;

  		if (book) {
	  		Api.searchBookToBorrow(book).success(function (response) {
	  			console.log(response);
	  			$scope.books = response;
	  		}).error(function (error) {
	  			if (error) {
	  				console.log(error);
	  			}
	  		})
	  	}

  	  	$scope.borrowBook = function (book) {
  	  		var now = new Date();

  	  		book.request_date = now.getTime();
  	  		book.request_id = User.userInfo.id;
  	  		console.log(book);
  	  		$ionicPopup.show({
  	  			subTitle: '이 책 주인에게 메시지를 보내시겠습니까?',
  	  			scope: $scope,
  	  			buttons: [{
  	  				text: '취소'
  	  			},{
  	  				text: '확인',
  	  				type: 'button-positive',
  	  				onTap: function (e) {
  	  					// api call
  	  					$scope.isLoading = true;
  	  					Api.sendMesssageForBook(book).success(function (response) {
  	  						$scope.isLoading = false;

  	  					}).error(function (error) {
  	  						$scope.isLoading = false;
  	  					});
  	  				}
  	  			}]
  	  		})
  	  	};

  	});