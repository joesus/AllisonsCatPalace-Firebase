'use strict';

var app = angular.module('allisonsCatPalaceFirebaseApp',
  [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'kittenControllers',
    'ngAnimate',
    'firebase'
  ])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider) {
      $routeProvider.
        when('/kittens', {
          templateUrl: 'views/kittens/kitten-index.html',
          controller: 'KittenIndexCtrl'
        }).
        when('/kittens/:kittenId', {
          templateUrl: 'views/kittens/kitten-show.html',
          controller: 'KittenShowCtrl'
        }).
        otherwise({
          redirectTo: '/kittens'
        });
    }
  ])
  .constant('FIREBASE_URL', 'https://catpalace.firebaseio.com/');