angular.module('bookApp.controllers')

  .controller('BookDetailCtrl2', function($scope, $state) {

  	  	$scope.goMain = function () {

			$state.go('main.list');
		};


  });