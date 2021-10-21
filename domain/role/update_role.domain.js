'use strict'

const { updateRole } = require("../../repositories/role.repository");

const updateRoleDomain = async (roleId = 0, role = '') => {

	const roleUpdated = await updateRole(roleId, role);

	if(Object.keys(roleUpdated).length === 0) {

		return { code: 404, message: 'El rol no fue localizado', data: roleUpdated };

	}

	return { code: 200, message: 'Rol actualizado', data: roleUpdated };

}

module.exports = updateRoleDomain;