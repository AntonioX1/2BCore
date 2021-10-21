'use strict'

const verifyTokenUtil = require("../utils/verify_token.util");

const authMiddleware = (request, response, next) => {

  const token = request.header('Authorization');

  if(token === undefined) {

    response
    .status(400)
    .json({
      message: 'No se ha enviado la cabecera authorization'
    })
    .end();

    return;

  }

  if(token.trim().length === 0) {

    response
    .status(400)
    .json({
      message: 'No se ha definido un valor para la cabecera authorization'
    })
    .end();

    return;

  }

  const [status, data] = verifyTokenUtil(token);

  if(status === false) {

    response
    .status(401)
    .json({
      message: data
    })
    .end();

    return;

  }

  request.user = data;

  next();

}

module.exports = authMiddleware;