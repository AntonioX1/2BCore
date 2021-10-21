'use strict'

const { getConnection } = require("../db/pg.connection");

async function createUser(email = '', password = '', roleId = 0) {

  const SQLString = `INSERT INTO public.users (email, password, role_id)
    VALUES ($1, $2, $3)
    RETURNING id, email, role_id;`;

  const SQLValues = [email, password, roleId];

  const { rows } = await getConnection.query(SQLString, SQLValues);

  return { ...rows.shift() };

}

async function getAllUsers() {

  const SQLString = `SELECT * FROM public.users ORDER BY id DESC`;

  const SQLValues = [];

  const { rows } = await getConnection.query(SQLString, SQLValues)

  return rows;

}

async function getUserByEmail(email = '') {

  const SQLString = `SELECT * FROM public.users
    WHERE email = $1
    ORDER BY id DESC;`;

  const SQLValues = [email];

  const { rowCount, rows } = await getConnection.query(SQLString, SQLValues)

  return (rowCount === 0) ? {} : rows.shift();


}

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail
}