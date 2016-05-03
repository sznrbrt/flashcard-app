'use strict';

var app = angular.module('flashCardApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('cards', {
      url:'/',
      templateUrl: '/html/cards.html',
      controller: 'cardsCtrl',
    })
    .state('editcard', {
      url:'/editcard/:id',
      templateUrl: '/html/editcard.html',
      controller: 'editcardCtrl',
    })
    .state('quiz', {
      url:'/quiz',
      templateUrl: '/html/quiz.html',
      controller: 'quizCtrl',
    })

  $urlRouterProvider.otherwise('/');
});
