const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('First middleware');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('First middleware');
    res.send('<h1>This is the user\'s page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Second middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);