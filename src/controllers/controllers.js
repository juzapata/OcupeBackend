const express = require('express');
const router = express.Router();
const Mentors = require('../models/mentors');
const Mentored = require('../models/mentored');



router.get('/get-mentors', async (req, res) => {
    try {
        return res.send({sucesso: true, mentor: Mentors});
    } catch (error) {
        console.log('ERRR', error);
        return res.status(400).send({error});
    }
});


// get /get-mentors

/*get /get-mentored
    body: {
        idMentorado: 1
    }
*/

/* post /set-status/ 
    body: {
        idMentorado: 1
        etapa: "mentoria"
        statusEtapa: "true"
    } 
    */

module.exports = app => app.use('/ocupe', router);
