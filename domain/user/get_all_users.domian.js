'use strict'

const { getAllUsers } = require("../../repositories/user.repository");

const getAllUsersDomain = async () => {

  const users = await getAllUsers();

  if(users.length === 0) {

    return { code: 404, message: 'Aún no existen usuarios', data: users };

  }

  return { code: 200, message: 'Usuarios obtenidos', data: users };

}

module.exports = getAllUsersDomain;