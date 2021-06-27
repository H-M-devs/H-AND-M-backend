"use strict";

const { userModel, seedUserData } = require("../Model/User.model");

const getdrugs = (req, res) => {
  const { email } = req.query;

  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
      //console.log(error)
    } else {
      res.json(user);
      //console.log(user)
    }
  });
};

const createDruge = (request, response) => {
   

    console.log(request.body)
    const { email, medicine } = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            //userData.medicine.push(doctor);
            userData.medicine.push(medicine);
            userData.save();
            response.json(userData);
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
            userData.books.splice(drugIndex,1);
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
