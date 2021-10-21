'use strict'

const { verify } = require('jsonwebtoken');

const verifyTokenUtil = (token = '') => {

	try {

		const payload = verify(token, process.env._JWTSecret);

		return [true, payload];

	} catch(error) {

		return [false, error.message];

	}

}

module.exports = verifyTokenUtil;