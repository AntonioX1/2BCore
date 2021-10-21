'use strict'

const getRoleByIdDomain = require("../../domain/role/get_role_by_id.domain");

const getRoleByIdController = async (request, response, next) => {

	try {

		const { roleId } = request.params;

		const { code, message, data } = await getRoleByIdDomain(roleId);

		response
		.status(code)
		.json({ message, data })
		.end();

	} catch(error) {

		next(error);

	}

}

module.exports = getRoleByIdController;