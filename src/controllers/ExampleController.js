const autoBind = require('auto-bind');
const { Controller } = require('../../system/controllers/Controller');
const { Example } = require('../models/Example');
const { ExampleService } = require('../services/ExampleService');

const exampleService = new ExampleService(new Example().getInstance());

class ExampleController extends Controller {
    constructor(service) {
        super(service);
        autoBind(this);
    }
}

module.exports = new ExampleController(exampleService);