'use strict';

var kittenControllers = angular.module('kittenControllers', []);

kittenControllers.controller('KittenIndexCtrl', function ($scope, Kitten) {

  $scope.kittens = Kitten.all;

  $scope.deleteKitten = function(kittenId) {
    Kitten.delete(kittenId);
  };

});