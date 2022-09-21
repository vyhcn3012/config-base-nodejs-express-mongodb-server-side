const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

class Example {
    static instance = null;
    initSchema() {
        const schema = new Schema({
            'content':{
                'type': String,
                'required': false,
            },
            'createdBy': {
                'type': Schema.Types.ObjectId,
                'required': true,
                'ref': 'account'
            },
            'createdAt': {
                'type': Date,
                'required': false,
            }
        }, { 'timestamps': false } );
        schema.plugin(uniqueValidator);

        try {
            mongoose.model( 'example', schema );
        } catch ( e ) {
           
        }
    }

    getInstance() {
        if (!Example.instance) {
            this.initSchema();
            Example.instance = mongoose.model( 'example' );
        }        
        return Example.instance;
    }
}

module.exports = { Example };