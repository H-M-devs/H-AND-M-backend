'use strict'



const mongoose = require('mongoose');
const medicineSchema = require ('./Medicine.model');
const doctorSchema = require('./Doctors.model')

const userSchema = new mongoose.Schema({
    email: { type: String },
    medicine: [medicineSchema],
    doctor:[doctorSchema],
    checkout:{type: Array}
})


const userModel = mongoose.model('user', userSchema);


const seedUserData = (newEmail) => {
    const newUser = new userModel({
        email: newEmail,
        medicine:[],
doctor:[]

    });
    newUser.save();
    console.log(newUser);

}


module.exports = {seedUserData,userModel}
