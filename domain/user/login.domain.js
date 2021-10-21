'use strict'

const { compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { getUserByEmail } = require("../../repositories/user.repository")

const loginDomain = async (email = '', password = '') => {

	const user = await getUserByEmail(email);

	if(Object.keys(user).length === 0) {

		return { code: 404, message: 'Correo electrónico y/o contraseña incorrecto', data: {} };

	}

	const isValidPassword = compareSync(password, user.password);

	if(isValidPassword === false) {

		return { code: 404, message: 'Correo electrónico y/o contraseña incorrecto', data: {} };

	}

	const payload = {
		id: user.id,
		email: user.email,
		roleId: user.role_id
	};

	const token = sign(payload, process.env._JWTSecret, { expiresIn: '24h' });

	return { code: 200, message: 'Inicio de sesión exitoso', data: token };

}

module.exports = loginDomain