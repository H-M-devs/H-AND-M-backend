"use strict";

const { userModel } = require("../Model/User.model");

const drugs = require("../healthData/data.json");
const doctor = require("../healthData/Doctor.json");



const doctorSchema = require('../Model/Doctors.model')
const medicineSchema = require("../Model/Medicine.model");

const getdrugs = (req, res) => {
  res.json(drugs);
};

const getdoctors = (req, res) => {
  res.json(doctor);
 
};

const addDoctor = (req , res)=>{
    const { email , doctor} = req.body;
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
          res.send(error);
        } else {
         
          userData.doctor.push(doctor);
          userData.save();
          res.json(userData);
          //console.log(request.body);
        }
      });
    };



const createDruge = (request, response) => {
  const { email, medicine } = request.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      //userData.medicine.push(doctor);
      userData.medicine.push(medicine);
      userData.save();
      response.json(userData);
      console.log(request.body);
    }
  });
};

const updateDrug = (request, response) => {
  console.log(request.params);
  const drugIndex = request.params.drug_idx;
  const { email, medicine } = request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.medicine.splice(drugIndex, 1, medicine);
      userData.save();
      response.send(userData);
    }
  });
};

// update doctors

// const updateDoctor = (request, response) => {
//   console.log(request.params);
//   const drugIndex = request.params.doctor_idx;
//   const { email, doctor } = request.body;

//   userModel.findOne({ email: email }, (error, userData) => {
//     if (error) {
//       response.send(error);
//     } else {
//       const index=userData.doctor.findIndex(val=>val._id===drugIndex)
//       userData.doctor.splice(index, 1, doctor.date);
//       userData.save();
//       response.send(userData);
//       console.log(userData)
//     }
//   });
// };



  const deleteDrug = (request, response) => {
  console.log(request.params);
  const drugIndex = request.params.drug_idx;
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.medicine.splice(drugIndex, 1);
      userData.save();
      response.send(userData);
    }
  });
};

// delete doctors

const deleteDoctor = (request, response) => {
  console.log(request.params);
  const doctorIndex = request.params.doctor_idx;
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.doctor.splice(doctorIndex, 1);
      userData.save();
      response.send(userData);
    }
  });
};




module.exports = {
  getdrugs,
  createDruge,
  updateDrug,
  deleteDrug,
  getdoctors,
  addDoctor,
 
  deleteDoctor
};
