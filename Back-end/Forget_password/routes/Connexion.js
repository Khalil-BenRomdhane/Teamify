const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Company = require('./../Model/Company');
const User = require('./../Model/User');
var a=false;
var b=false;
        router.use(express.json());
        router.post('/login', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            try{
                await User.find({email:req.body.email}).then((result) => {
                    if(result.length==0){
a=false;                            }
                    else {

a=true;}});
                await Company.find({email:req.body.email}).then((result) => {
                    if(result.length==0){
b=false;                            }
                    else {

b=true;}});


if ((a==false)&&(b==false)){
    res.sendStatus(400);

}
else if ((a===true)&&(b===false)){
    await User.find({email:req.body.email}).then((result) => {

    bcrypt.compare(req.body.password, result[0].password, function(err, result) {
            if (result) {
                console.log('valide');
                 User.find({email:req.body.email}).then((result2) => {
                    res.send(result2);

                console.log(result2);});
            }
            else{
                console.log('invalide')
                res.sendStatus(400);

            }
})
    })}
else if ((a===false)&&(b===true)){
    console.log("here");
    await Company.find({email:req.body.email}).then((result) => {

    bcrypt.compare(req.body.password, result[0].password, function(err, result) {
            if (result) {
                console.log('valide');
                 Company.find({email:req.body.email}).then((result2) => {
                    res.send(result2);

                console.log(result2);});
            }
            else{
                console.log('invalide')
                res.sendStatus(400);

            }
})
    })}


                                        }
                catch(err){console.log(err)}});


module.exports = router;