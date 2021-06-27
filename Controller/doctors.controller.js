
'use strict';

const doctors = require('../data/Doctor.json')


const getDoctors = (req, res) => {
    
      
            res.json(doctors)
}


  module.exports = getDoctors;