'use strict'

const updateRoleDomain = require("../../domain/role/update_role.domain");

const updateRoleController = async (request, response, next) => {

	try {

		const { roleId } = request.params;

		const { role } = request.body;

		const { code, message, data } = await updateRoleDomain(roleId, role);

		response
		.status(code)
		.json({ message, data })
		.end();

	} catch(error) {

		next(error);

	}

}

module.exports = updateRoleController;