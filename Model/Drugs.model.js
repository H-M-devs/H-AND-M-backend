'use strict'

const mongoose = require ('mongoose');

const drugsSchema = new mongoose.Schema ({
    medicineName: { type: String },
    medicineDescription : { type: String } ,
    status :  { type: String },
    medicineImg : {type: String},
   
})


module.exports = drugsSchema ;
