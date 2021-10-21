'use strict'

const router = require('express').Router();

router.use('/user', require('./routes/users/user.router'));

router.use('/role', require('./routes/role/role.router'));

module.exports = router;