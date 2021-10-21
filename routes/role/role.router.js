'use strict'

const roleRouter = require('express').Router();

const authMiddleware = require('../../middlewares/auth.middleware');

const createRoleController = require('../../controllers/role/create_role.controller');
const getAllRolesController = require('../../controllers/role/get_all_roles.controller');
const getRoleByIdController = require('../../controllers/role/get_role_by_id.controller');
const updateRoleController = require('../../controllers/role/update_role.controller');

roleRouter.post('/', authMiddleware, createRoleController);

roleRouter.get('/', authMiddleware, getAllRolesController);

roleRouter.get('/:roleId', authMiddleware, getRoleByIdController);

roleRouter.put('/:roleId', authMiddleware, updateRoleController);

module.exports = roleRouter;