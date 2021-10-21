'use strict'

const { createRole } = require("../../repositories/role.repository");

const createRoleDomain = async (role = '') => {

	return await createRole(role);

}

module.exports = createRoleDomain;