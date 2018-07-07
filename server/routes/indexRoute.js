// File: routes/indexRoute.js 
  
// Imports
var express = require('express');  
var path = require('path');

// Surface a Router
var router = express.Router();

// Provide a GET for the index route / , direct to index.html 
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/src/templates', 'index.html'));
});

module.exports = router; 
