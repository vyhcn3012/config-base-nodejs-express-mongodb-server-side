'use strict';
const { Service } = require('../../system/services/Service');
const autoBind = require('auto-bind');
const { HttpResponse } = require('../../system/helpers/HttpResponse');
const config = require('../../config/config').getConfig();

class ExampleService extends Service {
    constructor(model) {
        super(model);
        this.model = model;
        autoBind(this);
    }
}

module.exports = { ExampleService };