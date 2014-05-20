var rootController = angular.module('rootController', []);

rootController.controller('rootCtrl', function ($rootScope, $scope, $location, Auth) {

  if (Auth.signedIn()) {
    $location.path('/kittens');
  } else {
    $location.path('/facebook-login')
  }

  $scope.$on('$firebaseSimpleLogin:login', function () {
    $location.path('/');
  });

  $rootScope.signedIn = function() {
    return Auth.signedIn();
  };

  $rootScope.login = function () {
    Auth.login().then(function () {
      $location.path('/');
    })
  };

  $rootScope.logout = function () {
    console.log("Logging out from Auth Controller");
    Auth.logout();
    $location.path('/facebook-login');
  };
});
