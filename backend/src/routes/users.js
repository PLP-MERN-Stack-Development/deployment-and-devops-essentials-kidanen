// backend/src/routes/users.js
const express = require('express');
const router = express.Router();
const { listUsers, createUser } = require('../controllres/userController');

router.get('/', listUsers);
router.post('/', createUser);

module.exports = router;
