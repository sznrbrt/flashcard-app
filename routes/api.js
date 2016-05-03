'use strict';

var express = require('express');
var router = express.Router();

// /api/

router.use('/fcards', require('./fcards'));

module.exports = router;
