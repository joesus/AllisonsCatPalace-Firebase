'use strict';

app.factory('Kitten', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + 'kittens');
  var kittens = $firebase(ref);

  kittenRef.on('value', function(allKittensSnapshot) {
    var count = 0;
    if(allKittensSnapshot.hasChildren()) {
      allKittensSnapshot.forEach(function(kittenSnapshot) {
        count += 1;
      });
      $rootScope.kittenCount = count;
    } else
    {
      console.log("Something has gone wrong with your firebase snapshot...")
    }
  });

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