'use strict';

var mongoose = require('mongoose');

var FlashCard = mongoose.model('FlashCard', {
  category: String,
  question: String,
  answer: String
});

module.exports = FlashCard;
