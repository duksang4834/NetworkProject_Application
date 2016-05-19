angular.module('bookApp.controllers')

  .controller('RegisterSearchMainCtrl', function($scope, $state) {

  	$scope.goMainList = function () {

			$state.go('main.list');
		};

	$scope.goSearchDetail = function () {

		$state.go('registerSearch.Detail');
	};

  });