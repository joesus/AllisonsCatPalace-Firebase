'use strict';

app.factory('Kitten', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + 'kittens');
  var kittens = $firebase(ref);

  var Kitten = {
    all: kittens,
    create: function (kitten) {
      return kittens.$add(kitten);
    },
    find: function (kittenId) {
      return kittens.$child(kittenId);
    },
    delete: function (kittenId) {
      return kittens.$remove(kittenId);
    },
    update: function (kitten) {
      return kittens.$update(kitten);
    }
  };

  return Kitten;
});