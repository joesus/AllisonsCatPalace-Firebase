'use strict';

var kittenControllers = angular.module('kittenControllers', []);

kittenControllers.controller('KittenIndexCtrl', function ($scope, Kitten) {

  $scope.kittens = Kitten.all;

  $scope.deleteKitten = function(kittenId) {
    Kitten.delete(kittenId);
  };

});

kittenControllers.controller('KittenShowCtrl', function ($scope, $routeParams, Kitten) {
  $scope.kittenId = $routeParams.kittenId;
  $scope.kitten = Kitten.find($routeParams.kittenId);

  $scope.deleteKitten = function(kittenId) {
    Kitten.delete(kittenId);
  };
});

