'use strict'

const validator = require('validator');
const { getRoleById } = require('../../../repositories/role.repository');

const createUserValidationMiddleware = async (request, response, next) => {

	const validations = [];

	if(request.body.roleId === undefined) {

		validations.push({ message: 'No se ha enviado el argumento roleId' });

	}

	if(request.body.roleId !== undefined && validator.isNumeric(request.body.roleId) === false) {

		validations.push({ message: 'El valor del argumento roleId no es un número válido' });

	}

	if(request.body.roleId !== undefined) {

		const role = await getRoleById(request.body.roleId);

		if(Object.keys(role).length === 0) {

			validations.push({ message: 'El rol que intenta ingresar no existe' });

		}

	}

	if(validations.length) {

		response
		.status(400)
		.json({
			message: 'Existen validaciones que no se estan cumpliendo',
			data: validations
		})
		.end();

		return;

	}

	next();

}

module.exports = createUserValidationMiddleware;