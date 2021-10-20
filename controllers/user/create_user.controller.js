'use strict'

const createUserDomain = require("../../domain/user/create_user.domain");

const createUserController = async (request, response, next) => {

  try  {

    const { email, passowrd } = request.body;

    const userCreated = createUserDomain(email, passowrd);

    response.status(201).json({ user: userCreated });

  } catch(error) {

    next(error);

  }

}

module.exports = createUserController;