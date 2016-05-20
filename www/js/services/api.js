angular.module('bookApp.services')

	.service('Api', function ($http) {
		var isDev = true,
			url = (function () {
				return isDev ? '/api' : 'http://ec2-52-79-167-53.ap-northeast-2.compute.amazonaws.com:8080';
			})(),
			naverApiUrl = (function () {
				return isDev ? '/book' : 'https://openapi.naver.com/v1/search/book.xml';
			})();

		this.login = function (data) {
			return $http({
				method: 'GET',
				url: url + '/login',
				params: {
					account: data.account,
					password: data.password
				}
			});
		};

		this.signup = function (data) {
			return $http({
				method: 'POST',
				url: url + '/signup',
				params: {
					account: data.account,
					password: data.password,
					username: data.username,
					phone: data.phone
				}
			});
		};

		this.registerDevice = function (data) {
			return $http({
				method: 'POST',
				url: url + '/registerDevice',
				params: {
					account: data.account,
					device: data.device
				}
			});
		};

		this.getUserInfo = function (data) {
			return $http({
				method: 'GET',
				url: url + '/userInfo',
				params: {
					account: data.account
				}
			});
		};

		this.searchBook = function (data) {
			return $http({
				method: 'GET',
				url: naverApiUrl + '/book',
				headers: {
					'X-Naver-Client-Id': '3ENQzgkibzsEXbOY3sqy',
					'X-Naver-Client-Secret': '9UTN7mBN5W',
					'Content-Type': 'application/xml'
				},
				params: {
					target: 'book',
					query: data.bookName,
					display: data.display
				}
			});
		};
	});