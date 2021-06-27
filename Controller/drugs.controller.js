const { default: axios } = require('axios');
const { response } = require('express');
const { create } = require('../Model/Drugs.model');
const drugsModel = require('../Model/Drugs.model');

const getDrugs = async (req, res) => {
    try {
        const allDrugs = await drugsModel.find({})
        console.log(allDrugs.length);
        if (allDrugs && allDrugs.length) {
            res.json(allDrugs);
        } else {
            const responceMedicine = await axios.get(`${process.env.DRUGS_API}`)
            const medicineData = responceMedicine.data.results
            // console.log(medicineData[0]);
            const allMedicalDrugs =[]
            for (let i = 0; i < medicineData.length; i++) {
              
                const medicineName =medicineData[i].patient.drug[0].medicinalproduct
                const medicaldescription = medicineData[i].patient.drug[0].drugindication
                const responceImg = await axios.get(`${process.env.IMAGE_DRUG}?q=${medicineName}`, {
                    headers: {
                        "x-rapidapi-key": "779e1a4d5fmshd8a01bb46303db2p1de061jsn5b30e9122d19",
                        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                        "useQueryString": true
                    }
                })
                const imageUrl = responceImg.data.value[0].contentUrl
                console.log(imageUrl);
                const createDrugModal = new drugsModel({
                    medicineName: medicineName,
                    medicineDescription: medicaldescription,
                    status: "Avaliable",
                    medicineImg: imageUrl,

                })
                createDrugModal.save()
                console.log(createDrugModal);
                allMedicalDrugs.push(createDrugModal) 
            }
            res.json(allMedicalDrugs)

        }

    } catch (error) {
        res.send(error.message)
    }
}
module.exports = getDrugs;