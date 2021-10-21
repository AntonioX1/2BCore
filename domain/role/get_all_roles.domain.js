'use strict'

const { getAllRoles } = require("../../repositories/role.repository");

const getAllRolesDomain = async () => {

	const roles = await getAllRoles();

	if(roles.length === 0) {

		return { code: 404, message: 'Aún no existen roles registrados', data: roles };

	}
	
	return { code: 200, message: 'Roles obtenidos', data: roles };

}

module.exports = getAllRolesDomain;