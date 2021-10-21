'use strict'

const createRoleDomain = require("../../domain/role/create_role.domain");

const createRoleController = async (request, response, next) => {

	try {

		const { role } = request.body;

		const roleCreated = await createRoleDomain(role);

		response
		.status(201)
		.json({
			message: 'Rol creado',
			data: roleCreated
		})
		.end()

	} catch(error) {

		next(error)

	}

}

module.exports = createRoleController;