'use strict'

const { genSaltSync, hashSync, genSalt } = require('bcrypt');

const createUserDomain = async (email = '', password = '') => {

	const user = {
		email,
		password: hashSync(password, genSalt(10))
	};

	return user;

}

module.exports = createUserDomain;