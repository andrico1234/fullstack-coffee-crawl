'use strict';

require('./config/config');

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const port = process.env.PORT || 5000;

require('./app_api/models/db');

const {router} = require('./app_api/routes/locations');

let app = express();

app.use('/api', router);
app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {

    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {

    console.log(`Started on Port ${port}`);
});

module.exports = {
    app
};