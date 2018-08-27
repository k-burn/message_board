const express= require('express');
const router= express.Router();
var pool= require('../modules/pool.js');

router.get('/', (req, res)=>{
    console.log('in GET');
    const query ='SELECT * FROM "messages";';
    pool.query(query).then((results) =>{
        console.log(results);
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error making GET request');
        res.sendStatus(500);
    }); //end GET  
});

router.post('/', (req, res) => {
    console.log('POST /messages', req.body);
    const messages=req.body;
    const queryText = `INSERT INTO "messages" ("name", "message") VALUES ($1, $2);`;
    pool.query(queryText, [messages.name, messages.message])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) =>{
            console.log('error making message insert query', error);
            res.sendStatus(500);    
        });
});


module.exports = router;