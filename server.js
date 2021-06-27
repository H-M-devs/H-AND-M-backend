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
    deleteDrug}=require('./Controller/User.controller')

const port = process.env.PORT;
const {seedUserData }= require ('./Model/User.model');

mongoose.connect(`${mongoUrl}`, {useNewUrlParser: true, useUnifiedTopology: true});


// seedUserData();


// a server endpoint 
app.get('/', base);
 
app.get('/drugs', getdrugs)



app.post('/drug', createDruge);

app.put('/drug/:drug_idx', updateDrug);

app.delete('/drug/:drug_idx', deleteDrug)


app.listen(port) // kick start the express server to work



