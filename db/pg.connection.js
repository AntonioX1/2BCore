'use strict'

const { Pool } = require('pg');

class PgConnection {

	static instance;

	constructor() {

		if(!!PgConnection.instance) {

			return PgConnection.instance

		}

		PgConnection.instance = this;

		this._pool = new Pool();

		this._pool.on('connect', () => console.log('Conexión realizada'));

	}

}

module.exports = {
	getConnection: new PgConnection()._pool
};