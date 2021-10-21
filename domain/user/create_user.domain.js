'use strict'

const { genSaltSync, hashSync } = require('bcrypt');

const createUserDomain = async (email = '', password = '') => {

	const user = {
		email,
		password: hashSync(password, genSaltSync(10))
	};

	return user;

}

module.exports = createUserDomain;