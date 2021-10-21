'use strict'

const getAllUsersDomain = require("../../domain/user/get_all_users.domian");

const getAllUsersController = async (request, response, next) => {

	try {

		const {code, message, data } = await getAllUsersDomain();

		response
		.status(code)
		.json({ message, data, })
		.end()

	} catch(error) {

		next(error);

	}

}

module.exports = getAllUsersController;