'use strict'

const { genSaltSync, hashSync } = require('bcrypt');
const { createUser } = require('../../repositories/user.repository');

const createUserDomain = async (email = '', password = '', roleId = 0) => {

	const salt = Number(process.env._BcryptSalt);

	const passwordEncrypted = hashSync(password, genSaltSync(salt));

	const userCreated = await createUser(email, passwordEncrypted, roleId);

	return { code: 200, message: 'Usuario creado', data: userCreated };

}

module.exports = createUserDomain;