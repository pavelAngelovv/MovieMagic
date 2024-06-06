const express = require('express');
const { hbsConfig } = require('./config/hbsConfig');
const { router } = require('./config/routesConfig');
const { expressConfig } = require('./config/expressConfig');
const { databaseConfig } = require('./config/databaseConfig');

const PORT = 3000;


async function start() {
    const app = express();

    await databaseConfig();
    hbsConfig(app);
    expressConfig(app);
    app.use(router);
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });    
}

start();
