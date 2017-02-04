const express = require('express');
const config = require('express-config');

//const morgan = require('morgan');

const PORT = process.env.PORT || 3000
const app = express();


app.use(express.static(path.join(__dirname, 'static folder')))

// ROUTES


app.listen(PORT, () => process.stdout.write(`listening on port PORT`));
