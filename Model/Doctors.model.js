'use strict'

const mongoose = require ('mongoose');

const doctorSchema = new mongoose.Schema ({
    docName: { type: String },
    specialty : { type: String } ,
    long :  { type: String },
    lat :  { type: String },
    doctorImg : {type: String}
})


module.exports = doctorSchema ;