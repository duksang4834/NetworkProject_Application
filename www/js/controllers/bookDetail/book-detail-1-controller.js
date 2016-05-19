angular.module('bookApp.controllers')

  .controller('BookDetailCtrl1', function($scope, $state) {

  	  	$scope.goMain = function () {

			$state.go('main.list');
		};


  });