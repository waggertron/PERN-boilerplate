const express = require('express');
const config = require('config');
const path = require('path');

const userController = require(path.join(__dirname, 'controllers', 'userController.js'));


// const morgan = require('morgan');

const PORT = config.PORT || 3000;
const app = express();


app.use(express.static(path.join(__dirname, '..', 'app', 'public')));

app.get('/user/:userId', userController);

// ROUTES


app.listen(PORT, () => process.stdout.write(`listening on port ${PORT}`));
