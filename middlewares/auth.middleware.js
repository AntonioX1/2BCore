'use strict'

const { verify } = require('jsonwebtoken');

const authMiddleware = (request, response, next) => {

  const athorization = request.header('Authorization');

  if(athorization === undefined) {

    response
    .status(400)
    .json({
      message: 'No se ha enviado la cabecera authorization'
    })
    .end();

    return;

  }

  if(athorization.trim().length === 0) {

    response
    .status(400)
    .json({
      message: 'No se ha definido un valor para la cabecera authorization'
    })
    .end();

    return;

  }

  next();


}

module.exports = authMiddleware;