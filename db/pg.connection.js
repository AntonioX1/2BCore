'use strict'

const { Pool } = require('pg');

class PgConnection {

	static instance;

	constructor() {

		if(!!PgConnection.instance) {

			return PgConnection.instance

		}

		PgConnection.instance = this;

		this._pool = new Pool({
			user: process.env._PGUSER,
			host: process.env._PGHOST,
			database: process.env._PGDATABASE,
			password: process.env._PGPASSWORD,
			port: process.env._PGPORT,
		});

		this._pool.on('connect', () => console.log('Conexión realizada'));

	}

}

module.exports = PgConnection;