// Bring in Node modules
const express = require('express');
const { log, error, info, warn } = require('./modules/logger');

// Initialize Express
const app = express();
app.use('/static', express.static('public')) // serve static css
app.set('view engine', 'ejs'); // setup ejs

// Routes
app.use('/', require('./routes/index.js'));

// Start listening
const port = process.env.port || 1337;
app.listen(port, info('Express', `Started listening on port ${port}`))