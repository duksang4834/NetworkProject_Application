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

			Api.registerBook($scope.item).success(function (response) {
				console.log(response);
			}).error(function (error) {

			});

		};
  });