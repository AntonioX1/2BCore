'use strict'

const { Client } = require('pg');

class PgConnection {

	static instance;

	constructor() {

		if(!!PgConnection.instance) {

			return PgConnection.instance

		}

		PgConnection.instance = this;

		this._client = new Client();

		this._client.connect();

		this._client.on('connect', () => console.log('Conexión realizada'));

	}

}

module.exports = {
	getConnection: new PgConnection()._client
};