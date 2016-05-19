angular.module('bookApp.controllers')

  .controller('RegisterSearchDetailCtrl', function($scope, $state) {

  	  	$scope.goRegisterSearchMain = function () {

			$state.go('registerSearch.Main');
		};


  });