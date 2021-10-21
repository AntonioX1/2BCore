'use strict'

const validator = require('validator');

const loginValidationMiddleware = (request, response, next) => {

	const validations = [];

	if(request.body.email === undefined) {

		validations.push({ message: 'No se ha enviado el argumento email' });

	}

	if(request.body.email !== undefined && request.body.email.trim().length === 0) {

		validations.push({ message: 'El valor del argumento email no contiene algún valor' });

	}

	if(request.body.email !== undefined && request.body.email.trim().length < 6) {

		validations.push({ message: `Se esperaba que el valor del argumento email fuera mayor a 6 caracteres, se estan recibiendo ${ request.body.email.length }` });

	}

	if(request.body.email !== undefined && request.body.email.trim().length > 120) {

		validations.push({ message: 'Se esperaba que el valor del argumento email fuera menor o igual a 120 caracteres' });

	}

	if(request.body.email !== undefined && validator.isEmail(request.body.email) == false) {

		validations.push({ message: 'El correo electrónico no es válido' });

	}


	if(request.body.password === undefined) {

		validations.push({ message: 'No se ha enviado el argumento password' });

	}

	if(request.body.password !== undefined && request.body.password.trim().length === 0) {

		validations.push({ message: 'El valor del argumento password no contiene algún valor' });

	}

	if(request.body.password !== undefined && request.body.password.trim().length < 4) {

		validations.push({ message: `Se esperaba que el valor del argumento password fuera mayor a 4 caracteres, se estan recibiendo ${ request.body.password.length }` });

	}

	if(request.body.password !== undefined && request.body.password.trim().length > 250) {

		validations.push({ message: 'Se esperaba que el valor del argumento password fuera menor o igual a 250 caracteres' });

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

module.exports = loginValidationMiddleware;