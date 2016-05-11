angular.module('bookApp.controllers')

  .controller('RentSearchMainCtrl', function($scope, $state) {

  	$scope.goMainList = function () {

			$state.go('main.list');
		};

  });