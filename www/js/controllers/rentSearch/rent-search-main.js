angular.module('bookApp.controllers')

  	.controller('RentSearchMainCtrl', function($scope, $state, Api, User, $timeout, $ionicModal, $ionicPopup) {
  		var x2js = new X2JS();

  		$scope.data = {
  			bookName: '',
  			display: 10
  		};

  		$ionicModal.fromTemplateUrl('./templates/rentSearch/rent-search-detail.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
			$scope.modal = modal;
		});

  		$scope.goMainList = function () {
			$state.go('main.list');
		};

		$scope.goSearchDetail = function (book) {
			$scope.modal.show();

			if (book) {

				Api.searchBookToBorrow(book).success(function (response) {
		  			$scope.books = response;
            console.log(response);
		  		}).error(function (error) {
		  			if (error) {
		  				console.log(error);
		  			}
		  		});
			}
			// $state.go('main.rentSearchDetail');
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
  	  						$timeout(function () {
  	  							$scope.isLoading = false;
  	  							$scope.modal.hide();
	  	  						$state.go('main.list');
  	  						}, 1000);
  	  					}).error(function (error) {
  	  						$scope.isLoading = false;
  	  					});
  	  				}
  	  			}]
  	  		})
  	  	};

  });