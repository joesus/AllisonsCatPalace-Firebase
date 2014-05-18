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

kittenControllers.controller('KittenEditCtrl', function($scope, $routeParams, Kitten, $location) {

  $scope.kitten =  Kitten.find($routeParams.kittenId);

  // Required to link to firebase ids... maybe look into a better way to do this...
  $scope.kittenId = $routeParams.kittenId;

  $scope.editKitten = function() {
    $scope.kitten.$update($scope.kitten).then(function() {
      $location.path('/kittens/' + $scope.kittenId );
    })
  }

});

