'use strict';

app.factory('Auth',
  function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseSimpleLogin(ref, function(error, user) {
    });

    var Auth = {
      register: function (user) {
        return auth.$createUser(user.email, user.password);
      },
      signedIn: function () {
        return auth.user !== null;
      },
      login: function (user) {
        console.log(user);
        return auth.$login('facebook');
      },
      logout: function () {
        auth.$logout();
      }
    };

    $rootScope.signedIn = function () {
      return auth;
    };

    return Auth;
  });