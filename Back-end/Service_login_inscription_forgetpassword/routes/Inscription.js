const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('./../Model/User');
const Company = require('./../Model/Company');
const Avis = require('./../Model/Avis');
const View = require('./../Model/View');
const {sendmail} = require('./../Nodemailer/Inscription.js');
let fs2 = require('fs-extra');
        router.use(express.json());
router.post('/inscription', async function  (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try{
        
if(req.body.role=='user'){

    await User.find({email:req.body.email}).then(async(result) => {
        if(result.length!==0){
                        res.sendStatus(300);
                        console.log('Error user is trouve');
        }
        else {

                Users= new User({
                    id:req.body.id,
                    nom:req.body.nom,
                    prenom:req.body.prenom,
                    email:req.body.email,
                    password:bcrypt.hashSync(req.body.password,10),
                    role:req.body.role,
                    phone:req.body.phone,
                    url:req.body.url,
                  
                  
                });
                await Users.save();
                await sendmail(req.body.email,req.body.nom);
            }});}
                else if (req.body.role=='company'){
                    await Company.find({email:req.body.email}).then(async(result) => {
                        if(result.length!==0){
                                        res.sendStatus(300);
                                        console.log('Error company is trouve');
                        }
                        else {

view=new View({id:req.body.id,id_company:req.body.id});
avis=new Avis({id:req.body.id,id_company:req.body.id});
                    Companys= new Company({
                        id:req.body.id,
                        name:req.body.name,
                        email:req.body.email,
                        password:bcrypt.hashSync(req.body.password,10),
                        role:req.body.role,
                        phone:req.body.phone,
                        url:req.body.url,
                        location:req.body.location,
              
                    });
                    await Companys.save();
                    await avis.save();
                    await view.save();
                    await sendmail(req.body.email,req.body.name);

                }});}
                
                    res.send("valide");
                    console.log("valide");
                        }
                       
                      
                            
                                
        catch(err){console.log(err)}




});

router.post('/setavis', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { id_company, avis } = req.body;

    // validate the incoming data against the schema
    try {
        await Avis.findOneAndUpdate(
            { id_company: id_company },
            { $inc: { number: 1, avis: parseInt(avis) } }
        );
        try {
            await Avis.find({id_company: id_company}).then(async(result) => {
              res.send(result);
              console.log("valide");                             })
                               
           }catch (err) {
             return res.status(400).send({ message: err.message });
           }

    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
});


router.post('/getavis', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {id_company} = req.body;

    // validate the incoming data against the schema

    try {
      await Avis.find({id_company: id_company}).then(async(result) => {
        res.send(result);
        console.log("valide");                             })
                         
     }catch (err) {
       return res.status(400).send({ message: err.message });
     }
    



});

router.post('/setdata', async function  (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        await User.find({email:req.body.email}).then(async(result) => {
        await Company.find({email:req.body.email}).then(async(result2) => {
            if(((result.length==0)||(result[0].email==req.body.email2))&&(result2.length==0)){
                await User.updateOne({id:req.body.id},{email:req.body.email,nom:req.body.nom,prenom:req.body.prenom,phone:req.body.phone});
                console.log("changed");       
                console.log(req.body.email);       
                console.log(req.body.id);  
                res.sendStatus(200);
            }
            else {
                res.sendStatus(300);
            }

                    })
                    })
                }
                            
                                
        catch(err){console.log(err)
            res.sendStatus(300);

        }
    });

    const fs = require("fs");

    
    router.post('/setnewpassword', async function  (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        try{
            await User.updateOne({email:req.body.email},{password:bcrypt.hashSync(req.body.password,10)});
            res.sendStatus(200);    
            console.log("changed");       
            console.log(req.body.email);       
            console.log(req.body.password);       
                  
                        }
                                
                                    
            catch(err){console.log(err)
                res.sendStatus(300);
            
            }
        });

        var multer = require('multer')
        var path = require("path");
        
        // Check for extension of image
        const getExtension = file =>{
            if (file.mimetype == "image/jpeg")
                ext =  ".jpeg"
            else
                ext =".png"
            return ext;
        }

        
        let upload = multer({
            storage: multer.diskStorage({
              destination: (req, file, callback) => {
                let type = req.params.id;
                let path = `./images/${type}`;
                fs2.mkdirsSync(path);
                callback(null, path);
              },
              filename: (req, file, callback) => {
                //originalname is the uploaded file's name with extn
                callback(null, 'picture'+ '.jpeg');
              }
            })
          });
        router.post('/saveImage/:id', upload.single('file'), (req, res, next)=>{
        
        
        
            
        if(req.file){
                    var image = "/images/" +path+"/"+ req.file.filename
        res.json({
                    status:0,
                    message:"Successfully saved",
                    path : image
                })
                }
        })
        router.post('/updateImage/:id', upload.single('file'), async(req, res, next)=>{
            if(req.file){
                var image = "/images/" +path+"/"+ req.file.filename
        res.json({
                status:0,
                message:"Successfully saved",
                path : image
            })
          
        
        
        
                console.log("changed");       
       
        }
            
        
        })
        
        router.get("/images/:filename/:id", async (req, res) => {
            try {
              res.sendFile(path.join(__dirname, "./../images/"+ req.params.filename+"/"+req.params.id));
            } catch (error) {
                res.send("not found");
            }
          });



          router.post('/setview', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
  
            // validate the incoming data against the schema

            try {
              await View.find({id_company: req.body.id_company}).then(async(result) => {
                res.send(result);
                console.log(result);                             })
                                 
             }catch (err) {
               return res.status(400).send({ message: err.message });
             }
            
        
        
        
        });

          router.post('/getbyemail', async function (req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
  
            // validate the incoming data against the schema

            try {
              await Company.find({email: req.body.email}).then(async(result) => {
              await User.find({email: req.body.email}).then(async(result2) => {
                if((result.length===0)&&(result2.length===0)){
                res.sendStatus(200);
                console.log('non');}
            else{
                res.sendStatus(400);
                console.log('existe');  
            }                             }) })
                                 
             }catch (err) {
               return res.status(400).send({ message: err.message });
             }
            
        
        
        
        });



module.exports = router;