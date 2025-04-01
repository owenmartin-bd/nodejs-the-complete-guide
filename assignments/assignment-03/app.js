const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

app.get('/user', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

app.listen(3000);