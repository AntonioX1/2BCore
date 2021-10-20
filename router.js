'use strict'

const router = require('express').Router();

router.use('/user', require('./routes/users/user.router'));

module.exports = router;