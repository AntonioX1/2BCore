'use strict'

const { getRoleById } = require("../../repositories/role.repository");

const getRoleByIdDomain = async (roleId = 0) => {

	const role = await getRoleById(roleId);

	if(Object.keys(role).length === 0) {

		return { code: 404, message: 'El rol no fue localizado', data: role };

	}

	return { code: 200, message: 'Rol obtenido', data: role };

}

module.exports = getRoleByIdDomain;