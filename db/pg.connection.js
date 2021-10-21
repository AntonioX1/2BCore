'use strict'

const { Pool } = require('pg');

class PgConnection {

	constructor() {

		this._pool = new Pool({
			user: process.env._PGUSER,
			host: process.env._PGHOST,
			database: process.env._PGDATABASE,
			password: process.env._PGPASSWORD,
			port: process.env._PGPORT,
		});

	}

}

module.exports = PgConnection;