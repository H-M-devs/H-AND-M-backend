"use strict";

const { userModel} = require("../Model/User.model");

const drugs =require('../healthData/data.json')
const getdrugs = (req, res) => {
  
      res.json(drugs);
    }


const createDruge = (request, response) => {

    const { email, medicine } = request.body;
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            //userData.medicine.push(doctor);
            userData.medicine.push(medicine);
            userData.save();
            response.json(userData);
            console.log(request.body);
        }
    })
}

const updateDrug = (request, response) => {
    console.log(request.params)
    const drugIndex = request.params.drug_idx;
    const { email, medicine } = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.medicine.splice(drugIndex, 1, medicine);
            userData.save();
            response.send(userData)
        }

    });
}



const deleteDrug = (request, response) => {
    console.log(request.params)
    const drugIndex = request.params.drug_idx;
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.medicine.splice(drugIndex,1);
            userData.save();
            response.send(userData)
        }

    });
}




module.exports ={ 
    
    getdrugs,
    createDruge,
    updateDrug,
    deleteDrug

};
