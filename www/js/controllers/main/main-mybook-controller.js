angular.module('bookApp.controllers')

	.controller('MainMybookCtrl', function($scope, $rootScope, $ionicModal, Api) {

		$scope.book = $rootScope.myBookData;
		$scope.data = {
			book_id: $scope.book.id
		};
		
		$ionicModal.fromTemplateUrl('./templates/main/main-mybook-detail.html', {
			scope: $scope,
			animation: 'silde-in-up'
		}).then(function (modal) {
			$scope.modal = modal;
		});

		$scope.showPeople = function () {
			if ($scope.data.book_id) {
				$scope.modal.show();
				Api.getRequestsForBook($scope.data).success(function (response) {
					$scope.people = response;
					console.log(response);
				}).error(function (error) {
					console.log(error);
				});
			}
		};

		$scope.clickPerson = function (index) {
			$scope.clickedId = index;
		};

		$scope.rejectRequest = function (book) {
			var data = {
				id: book.id,
				book_id: book.book_id
			};
			Api.rejectRequest(data).success(function (response) {

			}).error(function (error) {
				console.log(error);
			})
		};
		$scope.acceptRequest = function (book) {
			console.log(book);
			var data = {
				id: book.id,
				book_id: book.book_id
			};
			Api.acceptRequest(data).success(function (response) {
				$scope.modal.hide();
			}).error(function (error) {
				console.log(error);
			});
		};

	});