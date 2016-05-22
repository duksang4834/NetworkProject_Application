// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('bookApp', ['ionic','ionic.service.core', 'ngCordova', 'bookApp.controllers', 'bookApp.services'])


.run(function($ionicPlatform, $rootScope, Api) {
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

    Ionic.io();
    $rootScope.push = new Ionic.Push({
      'onNotification': function (notification) {
        console.log(notification);
      }
    });
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
  .state('intro.login', {
      url: '/login',
      views: {
          'introContent': {
              templateUrl: 'templates/intro/intro-login.html',
              controller: 'IntroLoginCtrl'
          }
      }
  })

  .state('intro.signup', {
    url: '/signup',
    views: {
      'introContent': {
        templateUrl: 'templates/intro/intro-signup.html',
        controller: 'IntroSignupCtrl'
      }
    }
  })

  .state('main', {
    url: '/main',
    abstract: true,
    cache: false,
    templateUrl: 'templates/main/main.html',
    controller: 'MainCtrl'
  })

  .state('main.list', {
    url: '/list',
    cache: false,
    views: {
      'mainContent': {
        templateUrl: 'templates/main/main-list.html',
        controller: 'MainListCtrl'
      }
    }
  })

  .state('main.registerSearch', {
    url: '/registerSearchMain',
    views: {
      'mainContent': {
        templateUrl: 'templates/registerSearch/register-search-main.html',
        controller: 'RegisterSearchMainCtrl'
      }
    }
  })

  // .state('main.registerSearchDetail', {
  //   url: '/registerSearchDetail',
  //   views: {
  //     'mainContent': {
  //       templateUrl: 'templates/registerSearch/register-search-detail.html',
  //       controller: 'RegisterSearchDetailCtrl'
  //     }
  //   }
  // })

  .state('main.rentSearch', {
    url: '/rentSearch',
    views: {
      'mainContent': {
        templateUrl: 'templates/rentSearch/rent-search-main.html',
        controller: 'RentSearchMainCtrl'
      }
    }
  })

  // .state('main.rentSearchDetail', {
  //   url: '/rentSearchDetail',
  //   views: {
  //     'mainContent': {
  //       templateUrl: 'templates/rentSearch/rent-search-detail.html',
  //       controller: 'RentSearchDetailCtrl'
  //     }
  //   }
  // })



  .state('bookDetail', {
    url: '/bookDetail',
    abstract: true,
    templateUrl: 'templates/bookDetail/book-detail.html',
    controller: 'BookDetailCtrl'
  })

  .state('bookDetail.1', {
    url: '/1',
    views: {
      'bookDetailContent': {
        templateUrl: 'templates/bookDetail/book-detail-1.html',
        controller: 'BookDetailCtrl1'
      }
    }
  })

  .state('bookDetail.2', {
    url: '/2',
    views: {
      'bookDetailContent': {
        templateUrl: 'templates/bookDetail/book-detail-2.html',
        controller: 'BookDetailCtrl2'
      }
    }
  })

  .state('bookDetail.3', {
    url: '/3',
    views: {
      'bookDetailContent': {
        templateUrl: 'templates/bookDetail/book-detail-3.html',
        controller: 'BookDetailCtrl3'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro/login');

});

angular.module('bookApp.controllers', []);
angular.module('bookApp.services', []);
