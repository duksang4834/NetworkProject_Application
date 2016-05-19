angular.module('bookApp.controllers')

  .controller('RentSearchDetailCtrl', function($scope, $state) {

  	  	$scope.goRentSearchMain = function () {

			$state.go('rentSearch.Main');
		};

  });