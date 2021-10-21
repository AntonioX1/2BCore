'use strict'

const getAllRolesDomain = require("../../domain/role/get_all_roles.domain");

const getAllRolesController = async (request, response, next) => {

	try {

		const { code, message, data } = await getAllRolesDomain();

		response
		.status(code)
		.json({
			message,
			data,
		})
		.end()

	} catch(error) {

		next(error);

	}

}

module.exports = getAllRolesController;