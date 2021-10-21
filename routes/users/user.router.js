'use strict'

const userRouter = require('express').Router();

const adminPermissionMiddleware = require('../../middlewares/admin_permission.middleware');
const authMiddleware = require('../../middlewares/auth.middleware');
const loginValidationMiddleware = require('../../middlewares/validations/user/login_validation.middleware');

const createUserController = require('../../controllers/user/create_user.controller');
const getAllUsersController = require('../../controllers/user/get_all_users.controller');
const loginController = require('../../controllers/user/login.controller');
const createUserValidationMiddleware = require('../../middlewares/validations/user/create_user_validation.middleware');

userRouter.post('/', loginValidationMiddleware, createUserValidationMiddleware, authMiddleware, adminPermissionMiddleware, createUserController);

userRouter.get('/', authMiddleware, adminPermissionMiddleware, getAllUsersController);

userRouter.post('/login', loginValidationMiddleware, loginController);

module.exports = userRouter;