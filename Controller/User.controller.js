"use strict";

const { userModel } = require("../Model/User.model");

const drugs = require("../healthData/data.json");
const doctor = require("../healthData/Doctor.json");


const getdrugs = (req, res) => {
  res.json(drugs);
};

const getdoctors = (req, res) => {
  res.json(doctor);
 
};


const getUser = (req , res)=>{
  const { email } = req.query;
  userModel.findOne({ email: email }, (error, userData) => {
      if (error) {
        res.send(error);
      } else {
        res.json(userData);
      }
    });
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
        }
      });
    };



const createDruge = (request, response) => {
  const { email, medicine } = request.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.medicine.push(medicine);
      userData.save();
      response.json(userData);
    }
  });
};

const updateDrug = (request, response) => {
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


const updateDoctor = (request, response) => {
  const doctorIndex = request.params.doctor_idx;
  const { email, doctor } = request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.doctor.splice(doctorIndex, 1, doctor);
      userData.save();
      response.json(userData);
    }
  });
};



  const deleteDrug = (request, response) => {
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


const deleteDoctor = (request, response) => {
  const doctorIndex = request.params.doctor_idx;
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.doctor.splice(doctorIndex, 1);
      userData.save();
      response.json(userData);
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
  getUser,
  updateDoctor,
  deleteDoctor
};
