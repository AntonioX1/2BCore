'use strict'

const adminPermissionMiddleware = (request, response, next) => {

  const { roleId } = request.user;

  if([1].includes(roleId) === false) {

    response
    .status(401)
    .json({ message: 'No tienes permisos para consultar este servicio' })
    .end();

    return;

  }

  next();

}

module.exports = adminPermissionMiddleware;