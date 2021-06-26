'use strict'

const mongoose = require ('mongoose');

const medicineSchema = new mongoose.Schema ({
    medicineName: { type: String },
    medicineDescription : { type: String } ,
    status :  { type: String },
    medicineImg : {type: String}
})


module.exports = medicineSchema ;