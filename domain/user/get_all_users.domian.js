'use strict'

const PgConnection = require("../../db/pg.connection");

const { query } = new PgConnection();


const getAllUsersDomain = async () => {

  const SQLString = `SELECT * FROM public.users ORDER BY id DESC`;

  const SQLValues = [];

  return await query(SQLString, SQLValues);

}

module.exports = getAllUsersDomain;