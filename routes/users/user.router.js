'use strict'

const createUserController = require('../../controllers/user/create_user.controller');
const getAllUsersController = require('../../controllers/user/get_all_users.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

const userRouter = require('express').Router();

userRouter.post('/', createUserController);

userRouter.get('/', authMiddleware, getAllUsersController);


module.exports = userRouter;