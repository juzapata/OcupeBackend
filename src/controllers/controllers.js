const express = require('express');
const router = express.Router();
const Mentors = require('../models/mentors');
const Mentored = require('../models/mentored');




// get /get-mentors
router.get('/get-mentors', async (req, res) => {
    try {
        return res.send({sucesso: true, mentores: Mentors});
    } catch (error) {
        console.log('ERRR', error);
        return res.status(400).send({error});
    }
});

/*get /get-mentored
    body: {
        email: laura@gmail.com
    }
*/
router.get('/get-mentored', async (req, res) => {
    try {
        return res.status(200).send({sucesso: true, mentorados: Mentored});
    } catch (error) {
        console.log('ERRR', error);
        return res.status(400).send({error}); 
    }


}); 



module.exports = app => app.use('/ocupe', router);
