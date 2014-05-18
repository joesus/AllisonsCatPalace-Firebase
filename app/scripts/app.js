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
        when('/kitten-list', {
          templateUrl: 'views/kittens/kitten-list.html',
          controller: 'KittenIndexCtrl'
        }).
        when('/new-kitten', {
          templateUrl: 'views/kittens/kitten-create.html',
          controller: 'KittenCreateCtrl'
        }).
        when('/kittens/:kittenId', {
          templateUrl: 'views/kittens/kitten-show.html',
          controller: 'KittenShowCtrl'
        }).
        when('/kittens/:kittenId/edit', { templateUrl: 'views/kittens/kitten-edit.html',
          controller: 'KittenEditCtrl' }).
        otherwise({
          redirectTo: '/kittens'
        });
    }
  ])
  .constant('FIREBASE_URL', 'https://catpalace.firebaseio.com/');