const express = require('express');
const router = express.Router();
const Stadium = require('./../Model/Stadium');
const Calendar = require('./../Model/Calendar');

        router.use(express.json());
        router.post('/add', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const {id,id_company,times, name, dimension,numberofplayers,generation,ledlighting,id_calendar } = req.body;
  
            // validate the incoming data against the schema
            const stadium = new Stadium({ id,id_company, name, times,
              dimension,numberofplayers,generation,ledlighting});
            const calendar = new Calendar({ id,id_stadium:id,id_company});
            try {
              await stadium.save();            
              await calendar.save();            
                            res.send("valide");
                            console.log("valide");
                                
            } catch (err) {
              return res.status(400).send({ message: err.message });
            }
        
        
        
        });
        router.post('/getbycompany', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
           
  try {
    await Stadium.find({id_company:req.body.id}).then((result) => {
      if(result.length===0){
        res.sendStatus(500)
              }else{
res.send(result)
                   console.log("valide");}})
                       
   }catch (err) {
     return res.status(400).send({ message: err.message });
   }
        
        
        
        });
        router.get('/getall', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
           
  try {
    await Stadium.find().then((result) => {
res.send(result)
                   console.log("valide");})
                       
   }catch (err) {
     return res.status(400).send({ message: err.message });
   }
        
        
        
        });
        router.put('/update', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const { name, dimension,numberofplayers,generation,ledlighting } = req.body;

           
  try {
    await Stadium.updateOne({id: req.body.id, name, dimension,numberofplayers,generation,ledlighting}).then((result) => {
res.send(result)
                   console.log("valide");})
                       
   }catch (err) {
     return res.status(400).send({ message: err.message });
   }
        
        
        
        });
        router.post('/delete', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');

           
  try {
    await Stadium.deleteOne({id: req.params.id}).then((result) => {
res.send(result)
                   console.log("valide");})
                       
   }catch (err) {
     return res.status(400).send({ message: err.message });
   }
        
        
        
        });


module.exports = router;