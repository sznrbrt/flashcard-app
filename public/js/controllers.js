'use strict';

var app = angular.module('flashCardApp');

app.controller('cardsCtrl', function($scope, $rootScope, FlashCards, $state, $stateParams, StoreData) {
  console.log('cardsCtrl!');
  $scope.newCard = {};
  FlashCards.getAll()
  .then((res) => {
    $scope.flashcards = res.data;
    $scope.categories = [];
    var categories = res.data.map((e) => e.category).sort().forEach((e) => {if($scope.categories.indexOf(e) === -1) $scope.categories.push(e)})
  })
  .catch(err => {
    console.error(err);
  });

  $scope.editItem = function (card) {
    StoreData.set(card);
    $state.go('editcard', {'id': card._id});
  }

  $scope.removeItem = function (card) {
    var index = $scope.flashcards.indexOf(card);
    var id = card._id;
    console.log(index);
    FlashCards.delete(id)
    .then(() => {
      $scope.flashcards.splice(index, 1);
    })
    .catch(err => {
      console.error(err);
    });
  }

  $scope.openAddCard = function() {
    $scope.addingCard = true;
  }

  $scope.addNewCard = function() {
    var newCard = $scope.newCard;
    FlashCards.create(newCard)
    .then((res) => {
      $scope.flashcards.push(res.data);
    });

    $scope.newCard = {};
    $scope.addingCard = false;
  }
  $scope.cancel = function() {
    $scope.newCard = {};
    $scope.addingCard = false;
  }

  $scope.addNewCat = function() {
    if($scope.newCard.category === " + Add new category "){
      $scope.newCard.category = "";
      $scope.addingNewCat = true;
    }
  }
})

app.controller('editcardCtrl', function($scope, $rootScope, FlashCards, $state, $stateParams, StoreData) {
  var data = StoreData.get();
  $scope.newCard = angular.copy(data);

  $scope.cancel = function() {
    $state.go('cards');
  }

  $scope.reset = function() {
    $scope.newCard = data;
  }

  $scope.editCard = function() {
    var input = $scope.newCard;
    FlashCards.edit(input._id, input)
    .then(() => {
      console.log('success');
      $state.go('cards');
    })
  }

})
