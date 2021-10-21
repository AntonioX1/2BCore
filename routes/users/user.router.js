'use strict'

const userRouter = require('express').Router();

const adminPermissionMiddleware = require('../../middlewares/admin_permission.middleware');
const authMiddleware = require('../../middlewares/auth.middleware');

const createUserController = require('../../controllers/user/create_user.controller');
const getAllUsersController = require('../../controllers/user/get_all_users.controller');
const loginController = require('../../controllers/user/login.controller');

userRouter.post('/', authMiddleware, adminPermissionMiddleware, createUserController);

userRouter.get('/', authMiddleware, adminPermissionMiddleware, getAllUsersController);

userRouter.post('/login', loginController);

module.exports = userRouter;