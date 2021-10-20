'use strict'

const PgConnection = require("../db/pg.connection");

async function getAllUsers() {

  const SQLString = `SELECT * FROM public.users ORDER BY id DESC`;

  const SQLValues = [];

  return await new PgConnection().query(SQLString, SQLValues);

}

module.exports = {
  getAllUsers
}