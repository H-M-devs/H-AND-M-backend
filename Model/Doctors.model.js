'use strict'

const mongoose = require ('mongoose');

const doctorSchema = new mongoose.Schema ({
    nameDoctor: { type: String },
    age : { type: String } ,
    location :  { type: String },
    specialty :  { type: String },
    imgurl : {type: String},
    date:{type: String},
    desc:{type: String}

})


module.exports = doctorSchema ;