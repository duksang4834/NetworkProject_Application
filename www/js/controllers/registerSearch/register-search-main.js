angular.module('bookApp.controllers')

  	.controller('RegisterSearchMainCtrl', function($scope, $state, $http, Api, $ionicModal) {
  		var x2js = new X2JS();

  		$scope.options = {
  			year: (function () {
  				var years = [],
  					nowYear = (new Date()).getFullYear();

  				for (var i = nowYear; i < nowYear + 10; i += 1) {
  					years.push({
  						id: i - nowYear + 1,
  						label: i
  					});
  				}
  				return years;
  			})(),
  			month: (function () {
  				var months = [];
  				for (var i = 1; i < 13; i += 1) {
  					months.push({
  						id: i,
  						label: i
  					});
  				}
  				return months;
  			})(),
  			date: (function () {
  				var dates = [];
  				for (var i = 1; i < 32; i += 1) {
  					dates.push({
  						id: i,
  						label: i
  					});
  				}
  				return dates;
  			})(),
  			cleanness: [{
  				id: 1,
  				label: '상'
  			},
  			{
  				id: 2,
  				label: '중'
  			},
  			{
  				id: 3,
  				label: '하'
  			}],
  			price: undefined
  		};

  		$scope.data = {
  			bookName: '',
  			display: 10,
  			cleanness: $scope.options.cleanness[0],
  			startYear: $scope.options.year[0],
  			startMonth: $scope.options.month[0],
  			startDate: $scope.options.date[0],
  			endYear: $scope.options.year[0],
  			endMonth: $scope.options.month[0],
  			endDate: $scope.options.date[0]
  		};

  		$scope.date = {
  			startDate: {
  				year: undefined,
  				month: undefined,
  				date: undefined
  			},
  			endDate: {
  				year: undefined,
  				month: undefined,
  				date: undefined
  			}
  		};

  		$ionicModal.fromTemplateUrl('./templates/registerSearch/register-search-detail.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
			 $scope.modal = modal;
		  });

	  	$scope.goMainList = function () {
			$state.go('main.list');
		};

		$scope.goSearchDetail = function (book) {
			$scope.book = book;
			$scope.modal.show();
		};

		$scope.registerBook = function () {
			$scope.book.price = $scope.data.price;
			$scope.book.start_date = (new Date($scope.data.startYear.label, $scope.data.startMonth.label, $scope.data.startDate.label)).getTime();
			$scope.book.end_date = (new Date($scope.data.endYear.label, $scope.data.endMonth.label, $scope.data.endDate.label)).getTime();
			$scope.book.cleanness = $scope.data.cleanness.label;
      console.log($scope.book);
			Api.registerBook($scope.book).success(function (response) {
				$scope.modal.hide();				
				$state.go('main.list');
			}).error(function (error) {

			});
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

  	});