const { urlencoded, static } = require('express');

function expressConfig(app) {
    app.use(urlencoded({ extended: true }));
    app.use('/static', static('static'));
};

module.exports = { expressConfig };
