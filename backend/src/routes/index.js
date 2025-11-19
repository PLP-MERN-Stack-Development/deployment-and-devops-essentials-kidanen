// backend/src/routes/index.js
const express = require('express');
const router = express.Router();
const users = require('./users');

router.use('/users', users);

module.exports = router;
