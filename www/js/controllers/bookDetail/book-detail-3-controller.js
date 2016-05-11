angular.module('bookApp.controllers')

  .controller('BookDetailCtrl3', function($scope, $state) {

  	  	$scope.goMain = function () {

			$state.go('main.list');
		};


  });