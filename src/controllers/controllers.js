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
        if (!req.body.email){
            return res.status(400).send({sucesso: false, erro: "é necessário colocar o id do mentorado no body"});
        }
        let email = req.body.email;
        let mentorado = Mentored.filter(person =>{
            return person.contact.email == email;
        });
        if (!mentorado){
            return res.status(400).send({sucesso: false, erro: "mentorad@ não existe"});
        }

        return res.status(200).send({sucesso: true, mentorado: mentorado[0]});

    } catch (error) {
        console.log('ERRR', error);
        return res.status(400).send({error}); 
    }


}); 



module.exports = app => app.use('/ocupe', router);
