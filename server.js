const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance 
app.use(express.json());
require('dotenv').config();
 const axios = require('axios'); // require the package
const mongoose = require('mongoose');
const mongoUrl=process.env.MONGO_URL;
const base = require ('./Controller/base.controller');
const {getdrugs,
    createDruge,
    updateDrug,
    getdoctors,
    addDoctor,
    getUser,
    deleteDoctor,
    updateDoctor,
    deleteDrug}=require('./Controller/User.controller')

const port = process.env.PORT;
const {seedUserData }= require ('./Model/User.model');

mongoose.connect(`${mongoUrl}`, {useNewUrlParser: true, useUnifiedTopology: true});


// seedUserData();

app.get('/', base);
// a drugs server endpoint 

app.get('/drugs', getdrugs)

app.get('/doctors', getdoctors)

app.post('/doctor' , addDoctor)
// delete and update 

app.put('/doctor/:doctor_idx', updateDoctor);

app.get('/user', getUser);

app.post('/drug', createDruge);

app.put('/drug/:drug_idx', updateDrug);

app.delete('/drug/:drug_idx', deleteDrug);

app.delete('/doctor/:doctor_idx', deleteDoctor);


app.listen(port) // kick start the express server to work



