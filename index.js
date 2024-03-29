const express = require('express');
const path = require('path');
const route = require('./routes/index');

const app = express();

// port 3000 tenzij preconfigured port
const config = {
    port: process.env.PORT || 3000,
};

// load files that are in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// set routes
app.use('/', route);

// set view engine to pug
app.set('view engine', 'pug');

app.listen(config.port, () => {
    console.log('Server listening at port ${config.port}.');
});

module.exports = app;