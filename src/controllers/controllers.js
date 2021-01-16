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
        id: 1
    }
*/
router.get('/get-mentored', async (req, res) => {
    
    try {
        if (!req.body.id){
            return res.status(400).send({sucesso: false, erro: "é necessário colocar o id do mentorado no body"});
        }
        let id = req.body.id;
        let mentorado = Mentored.filter(person =>{
            return person.id == id;
        });
        if (!mentorado){
            return res.status(400).send({sucesso: false, erro: "mentorado não existe"});
        }

        return res.status(200).send({sucesso: true, mentorado: mentorado[0]});

    } catch (error) {
        console.log('ERRR', error);
        return res.status(400).send({error}); 
    }


}); 

/* post /set-status/ 
    body: {
        id: 1
        stage: "mentoria"
        status: "true"
    } 
    */
router.post('/set-status', async (req, res)=>{
    try {
        let id = req.body.id;
        let stage = req.body.stage;
        let status = req.body.status;

        if (!id){
            return res.status(400).send({sucesso: false, erro: "é necessário colocar o id do mentorado no body"});
        }
        if (!stage){
            return res.status(400).send({sucesso: false, erro: "é necessário colocar o stage do mentorado a ser setado"});
        }
        if (!status){
            return res.status(400).send({sucesso: false, erro: "é necessário colocar se o status é true ou false"});
        }
        
        let mentorado = Mentored.filter(person =>{
            return person.id == id;
        });
        if (!mentorado){
            return res.status(400).send({sucesso: false, erro: "mentorado não existe"});
        }

        for (etapa in mentorado[0].stages){
            if (etapa == stage){
                console.log(etapa);
                console.log(etapa.value);
                etapa.value = status;
            }
        }
        // console.log(mentorado[0]);

        return res.status(200).send({sucesso: true, mentorado: mentorado[0]});

    } catch (error) {
        console.log('ERRR', error);
        return res.status(400).send({error}); 
    }
})

module.exports = app => app.use('/ocupe', router);
