'use strict'

const loginDomain = require("../../domain/user/login.domain");

const loginController = async (request, response, next) => {

	try {

		const { email, password } = request.body;

		const { code, message, data } = await loginDomain(email, password);

		response
		.status(code)
		.json({ message, data })
		.end();

	} catch(error) {

		next(error);

	}

}

module.exports = loginController;