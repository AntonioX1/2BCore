'use strict'

const { getConnection } = require("../db/pg.connection");

async function createRole(role = '') {

  const SQLString = `INSERT INTO public.roles (role)
		VALUES ($1)
		RETURNING id, role, created_at, updated_at;`;

	const SQLValues = [role];

	const { rows } = await getConnection.query(SQLString, SQLValues);

	return { ...rows.shift() };

}

async function getAllRoles() {

  const SQLString = `SELECT * FROM public.roles
    ORDER BY id DESC;`;

	const SQLValues = [];

	const { rows } = await getConnection.query(SQLString, SQLValues);

  return rows;

}

async function getRoleById(roleId = 0) {

  const SQLString = `SELECT * FROM public.roles
  WHERE id = $1
    ORDER BY id DESC;`;

	const SQLValues = [roleId];

	const { rowCount, rows } = await getConnection.query(SQLString, SQLValues);

  return (rowCount === 0) ? {} : rows.shift();

}

async function updateRole(roleId = 0, role = '') {

  const SQLString = `UPDATE public.roles
    SET role = $2,
    updated_at = NOW()
    WHERE id = $1
    RETURNING id, role, created_at, updated_at;`;

  const SQLValues = [roleId, role];

  const { rows } = await getConnection.query(SQLString, SQLValues);

  return { ...rows.shift() };

}

module.exports = {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole
}