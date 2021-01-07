// Bring in all Node modules
require('dotenv').config();
const express = require('express');
const router = express.Router();

// Main Route - GET
router.get('/', (req, res) => {
  res.render('index', {
    projectName: process.env.PROJECT_NAME,
    port: process.env.PORT
  });
});

module.exports = router;
