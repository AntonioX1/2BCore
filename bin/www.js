'use strict'

require('dotenv').config();

const app = require('../app');

app.listen(process.env._PORT, () => console.log(`Server listen to: http://localhost:${ process.env._PORT }`));