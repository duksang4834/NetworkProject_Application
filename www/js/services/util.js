angular.module('bookApp.services')

	.service('Util', function ($window) {

		this.localStorage = {
      	set: function(key, value) {
        	$window.localStorage[key] = value;
      	},
      	get: function(key, defaultValue) {
        	return $window.localStorage[key] || defaultValue;
      	},
      	setObject: function(key, value) {
        	$window.localStorage[key] = JSON.stringify(value);
      	},
      	getObject: function(key) {
        	return JSON.parse($window.localStorage[key] || '{}');
      	},
      	remove: function(key) {
        	delete $window.localStorage[key];
     	}
    };

	});