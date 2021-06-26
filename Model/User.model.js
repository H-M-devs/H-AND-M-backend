'use strict'

const mongoose = require('mongoose');
const medicineSchema = require ('./Medicine.model');
const doctorSchema = require ('./Doctors.model');

const userSchema = new mongoose.Schema({
    email: { type: String },
    medicine: [medicineSchema],
    doctor : [doctorSchema]
})


const userModel = mongoose.model('user', userSchema);


const seedUserData = () => {
    const newUser = new userModel({
        email: 'zx.hammam@gmail',
      
    });
    newUser.save();
    console.log(newUser);

}


module.exports = {seedUserData,userModel}
