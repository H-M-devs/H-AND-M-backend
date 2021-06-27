'use strict'

const mongoose = require('mongoose');
const medicineSchema = require ('./Medicine.model');


const userSchema = new mongoose.Schema({
    email: { type: String },
    medicine: [medicineSchema],
  
})


const userModel = mongoose.model('user', userSchema);


const seedUserData = () => {
    const newUser = new userModel({
        email: "zx.hammam@gmail.com",
        medicine:[{
        medicineName:"CEFTRIAXONE",
        medicineDescription:"LISTERIOSIS",
        status:"Avaliable",
        medicineImg:"https://cdn11.bigcommerce.com/s-b7xzv15ucx/images/stencil/1280x1280/products/4728/99/Ceftriaxone_1g__22951.1496763083.jpg?c=2&imbypass=on",
       },
    
        {
        medicineName:"PREDNISONE",
        medicineDescription:"IMMUNOSUPPRESSION",
        status:"Avaliable",
        medicineImg:"https://www.petsupplies4less.com/assets/images/012122-5-100-1-HR.jpg",
        },]
     
      
    });
    newUser.save();
    console.log(newUser);

}


module.exports = {seedUserData,userModel}
