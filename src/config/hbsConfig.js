const handlebars = require('express-handlebars');

function hbsConfig(app) {
    const hbs = handlebars.create({
        extname: '.hbs'
    });

    app.engine('.hbs', hbs.engine);
    app.set('view engine', 'hbs'); // Set the view engine to the extension name
    app.set('views', './views'); // Ensure views directory is set correctly
}

module.exports = { hbsConfig };
