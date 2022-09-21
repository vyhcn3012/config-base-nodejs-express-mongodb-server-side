'use strict';
const ExampleController = require('../../controllers/ExampleController');
const express = require('express'),
    router = express.Router();
    
router.get('/', (req, res) => {
    res.send('Welcome to the exmaple')
});
module.exports = router;