'use strict'

const createUserDomain = require("../../domain/user/create_user.domain");

const createUserController = async (request, response, next) => {

  try  {

    const { email, password, roleId } = request.body;

    const { code, message, data } = await createUserDomain(email, password, roleId);

    response
    .status(code)
    .json({ message, data })
    .end();

  } catch(error) {

    next(error);

  }

}

module.exports = createUserController;