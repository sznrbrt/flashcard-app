'use strict';

var express = require('express');
var router = express.Router();

var FlashCard = require('../models/fcard');

// GET /api/fcards
router.get('/', (req, res) => {
  FlashCard.find({}, (err, cards) => {
    if(err) return res.status(400).send(err);
    else res.send(cards);
  });
})
// POST /api/fcards
router.post('/', (req, res) => {
  var fcard = new FlashCard(req.body);
  fcard.save({new: true}, (err, card) => {
    if(err) return res.status(400).send(err);
    else res.send(card);
  })
})
// DELETE /api/fcards/:id
router.delete('/:id', (req, res) => {
  var id = req.params.id;
  FlashCard.findByIdAndRemove(id, (err) => {
    if(err) return res.status(400).send(err);
    else res.send(`id: ${id} Document deleted!`);
  })
})
// PUT /api/fcards/:id
router.put('/:id', (req, res) => {
  var id = req.params.id;
  console.log(req.body);
  console.log(id);
  FlashCard.findByIdAndUpdate(id, { $set: req.body }, {new: true}, (err, card) => {
    if(err) return res.status(400).send(err);
    else res.send(card);
  })
})

module.exports = router;
