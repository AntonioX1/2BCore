'use strict'

const { response } = require("express");
const getAllUsersDomain = require("../../domain/user/get_all_users.domian");

const getAllUsersController = async (request, response, next) => {

	try {

		const users = await getAllUsersDomain();

		if(users.rowCount === 0) {

			response.status(404).json({
				message: 'Aún no existen usuarios',
				users,
			}).end()

		}

	} catch(error) {

		next(error);

	}

}

module.exports = getAllUsersController;