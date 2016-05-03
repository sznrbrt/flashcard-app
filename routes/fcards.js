'use strict';

var express = require('express');
var router = express.Router();


// GET /api/fcards
router.get('/', (req, res) => {
  res.send('Hello from the endpoint \n');
})

module.exports = router;
