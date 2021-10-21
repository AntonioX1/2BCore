'use strict'

const createUserController = require('../../controllers/user/create_user.controller');
const getAllUsersController = require('../../controllers/user/get_all_users.controller');
const loginController = require('../../controllers/user/login.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

const userRouter = require('express').Router();

userRouter.post('/', authMiddleware, createUserController);

userRouter.get('/', authMiddleware, getAllUsersController);

userRouter.post('/login', loginController);

module.exports = userRouter;