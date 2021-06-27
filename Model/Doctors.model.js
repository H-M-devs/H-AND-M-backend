'use strict'

const mongoose = require ('mongoose');

const doctorSchema = new mongoose.Schema ({
    nameDoctor: { type: String },
    age : { type: String } ,
    location :  { type: String },
    specialty :  { type: String },
    img_url : {type: String},
    date:{type: String}
})


module.exports = doctorSchema ;