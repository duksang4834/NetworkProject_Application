// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('bookApp', ['ionic', 'bookApp.controllers', 'bookApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('intro', {
        url: '/intro',
        abstract: true,
        templateUrl: 'templates/intro/intro.html',
        controller: 'IntroCtrl'
    })
////////Home////////
    .state('home', {
        url: '/home',
        templateUrl: 'templates/Home/home.html',
        controller: 'IntroLoginCtrl'
    })

<<<<<<< HEAD
    .state('join', {
        url: '/home/join',
        templateUrl: 'templates/Home/join.html',
        controller: 'IntroLoginCtrl'
    })
    .state('login', {
        url: '/home/login',
            templateUrl: 'templates/Home/login.html',
            controller: 'IntroLoginCtrl'
    })
////////Search////////
    .state('search', {
        url: '/home/search',
                        templateUrl: 'templates/Search/search.html',
                controller: 'IntroLoginCtrl'
            }
        }
    })
    .state('searchDetail', {
        url: '/home/:search/:searchDetail',
        views: {
            'introContent': {
                templateUrl: 'templates/Search/searchDetail.html',
                controller: 'IntroLoginCtrl'
            }
        }
    })
    .state('enroll', {
        url: '/home/:search/:searchDetail/:enroll',
        views: {
            'introContent': {
                templateUrl: 'templates/Search/enroll.html',
                controller: 'IntroLoginCtrl'
            }
        }
    })
////////Book Detail////////
    .state('bookDetail_1', {
        url: '/home/:bookDetail_1',
        views: {
            'introContent': {
                templateUrl: 'templates/BookDetail/bookDetail_1.html',
                controller: 'IntroLoginCtrl'
            }
        }
    })
    .state('bookDetail_2', {
        url: '/home/:bookDetail_2',
        views: {
            'introContent': {
                templateUrl: 'templates/BookDetail/bookDetail_2.html',
                controller: 'IntroLoginCtrl'
            }
        }
    })
    .state('bookDetail_3', {
        url: '/home/:bookDetail_3',
        views: {
            'introContent': {
                templateUrl: 'templates/BookDetail/bookDetail_3.html',
                controller: 'IntroLoginCtrl'
            }
        }
    })
////////Rent Search////////
    .state('rentSearch', {
        url: '/home/:rentSearch',
        views: {
            'introContent': {
                templateUrl: 'templates/rentSearch/rentSearch.html',
                controller: 'IntroLoginCtrl'
            }
        }
    })
    .state('rentSearchDetail', {
        url: '/home/:rentSearch/:rentSearchDetail',
        views: {
            'introContent': {
                templateUrl: 'templates/rentSearch/rentSearchDetail.html',
                controller: 'IntroLoginCtrl'
            }
        }
    });
=======
  .state('intro.login', {
      url: '/login',
      views: {
          'introContent': {
              templateUrl: 'templates/intro/intro-login.html',
              controller: 'IntroLoginCtrl'
          }
      }
  });
>>>>>>> master


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro/login');

});

angular.module('bookApp.controllers', []);
angular.module('bookApp.services', []);
