const axios = require('axios');
const josnData = require('')

const drugsHandler = (req , res)=>{
    //const {limit} =req.query
    //console.log(req.query)

   
    //const url =`https://api.fda.gov/drug/event.json?limit=${limit}`;
    axios.get(josnData).then(result=>{
        console.log(josnData)
      const drugsArray=result.data.results.map(res=>{
          let drug= res.patient.drug
        return new Drug(drug)
         
      })
      res.send(drugsArray)
    })
  }
 

  function addFavHandler(req, res){

    const {medicineName, medicineDescription, medicineImg ,status} = req.body;
    const newDrug = new userModel({
      medicineName: medicineName,
      medicineDescription: medicineDescription,
      medicineImg: medicineImg,
      status : status

    })
    
    newDrug.save();
 }



 
  module.exports = {drugsHandler ,addFavHandler}