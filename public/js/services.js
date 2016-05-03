'use strict';

var app = angular.module('flashCardApp');

app.service('FlashCards', function($http) {

  this.getAll = () => {
    return $http.get('./api/fcards/');
  }
  this.create = (card) => {
    return $http.post('/api/fcards/', card);
  }
  this.delete = (id) => {
    return $http.delete(`/api/fcards/${id}`);
  }
  this.edit = (id, data) => {
    return $http.put(`/api/fcards/${id}`, data);
  }
})

app.service('StoreData', function($http) {

  var storeData = {};

  this.get = () => {
    return storeData;
  }

  this.set = (data) => {
    storeData = data;
  }
})
