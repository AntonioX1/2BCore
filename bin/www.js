'use strict'

require('dotenv').config();

const app = require('../app');
const PgConnection = require('../db/pg.connection');

app.listen(process.env._PORT, () => {

  console.log(`Server listen to: http://localhost:${ process.env._PORT }`)

});