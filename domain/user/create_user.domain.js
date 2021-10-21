'use strict'

const { genSaltSync, hashSync } = require('bcrypt');
const { createUser } = require('../../repositories/user.repository');

const createUserDomain = async (email = '', password = '') => {

	const salt = Number(process.env._BcryptSalt);

	const passwordEncrypted = hashSync(password, genSaltSync(salt));

	const user = {
		email,
		password: passwordEncrypted
	};

	return createUser(user);

}

module.exports = createUserDomain;