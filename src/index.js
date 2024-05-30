const express = require('express');
const { hbsConfig } = require('./config/hbsConfig');

const PORT = 3000;

const app = express();

hbsConfig(app);
expressConfig(app);

app.listen(PORT);