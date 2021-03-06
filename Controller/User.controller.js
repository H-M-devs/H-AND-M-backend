"use strict";

const { userModel,seedUserData } = require("../Model/User.model");
let doctors = require('../healthData/Doctor.json');
const drugs = require("../healthData/data.json");
const doctor = require("../healthData/Doctor.json");


const getdrugs = (req, res) => {
  res.json(drugs);
};

const getdoctors = (req, res) => {
  res.json(doctor);
 
};




const createUser = (request, response) => {
  const { email } = request.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error);
   
    } else {
      if (userData === null) {
        seedUserData(email);
        response.json(userData);
      }else{

        response.json(userData);
      }
      
    }
  });
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
    let idx=0;
    let doc = {};
    doctors.forEach((value,index)=>{

      if (value.nameDoctor === doctor.nameDoctor) {
        doc= value;
        idx=index;
      }

      return value.nameDoctor === doctor.nameDoctor
    })
    console.log(doc);
    console.log(doctor.date);
    if (doc.schedual  && doc.schedual.includes(doctor.date)) {
      res.send('busy');
    }else{
      doc.schedual=[...doctor.date]
      let temp = doc.schedual.join('');
      doc.schedual=temp;
      doc.schedual=temp.split(' ')
      doctors[idx]=doc;
      
      console.log( doctors[idx]);
      userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
          res.send(error);
        } else {
          userData.doctor.push(doctor);
          userData.save();
          res.json(userData);
        }
      });
    }
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






const deleteDrugs = (req,res)=>{
  const {email} = req.query;
  userModel.findOne({ email: email},(error,userData)=>{
    if (error){
      res.send(error);
    }else{
      userData.medicine.splice(0,userData.medicine.length)
      userData.save();
      res.json(userData);
    }
  })
}


const addToHistory = (request, response) => {
  const { email, checkout } = request.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.checkout.push(checkout);
      userData.save();
      response.json("Done");
    }
  });
};


const clearHistory = (req,res)=>{
  const {email} = req.query;
  userModel.findOne({ email: email},(error,userData)=>{
    if (error){
      res.send(error);
    }else{
      userData.checkout.splice(0,userData.checkout.length)
      userData.save();
      res.json(userData);
    }
  })
}




module.exports = {
  getdrugs,
  createDruge,
  updateDrug,
  deleteDrug,
  getdoctors,
  addToHistory,
  addDoctor,
  clearHistory,
  getUser,
  updateDoctor,
  deleteDoctor,
  createUser,
  deleteDrugs
};
