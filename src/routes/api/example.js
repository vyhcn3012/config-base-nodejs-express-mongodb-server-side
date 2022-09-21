'use strict';
const ExampleController = require('../../controllers/ExampleController');
const express = require('express'),
    router = express.Router();

// http://localhost:5555/api/examples
router.get('/', (req, res) => {
    res.send('Welcome to the exmaple')
});
module.exports = router;