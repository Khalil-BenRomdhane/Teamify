const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('./../Model/User');
const Company = require('./../Model/Company');
const {sendmail} = require('./../Nodemailer/Inscription.js');
let fs2 = require('fs-extra');
        router.use(express.json());
router.post('/inscription', async function  (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try{
        await User.find({email:req.body.email}).then(async(result) => {
            if(result.length!==0){
                            res.sendStatus(300);
                            console.log('Error user is trouve');
            }
            else {
                console.log(req.body.photo);
                console.log(req.body.id);
if(req.body.role=='user'){

                Users= new User({
                    id:req.body.id,
                    nom:req.body.nom,
                    prenom:req.body.prenom,
                    email:req.body.email,
                    password:bcrypt.hashSync(req.body.password,10),
                    cin:req.body.cin,
                    role:req.body.role,
                    tel:req.body.tel,
                    sexe:req.body.sexe,
                    photo:req.body.photo,
                    username:req.body.username,
                    path:'http://localhost:4000/images/'+req.body.email+'_'+req.body.tel+'/'+req.body.photo,
                    date_creation:req.body.date_creation,
                });
                await Users.save();
                await sendmail(req.body.email,req.body.nom);
            }
                else if (req.body.role=='company'){
                    Companys= new Company({
                        id:req.body.id,
                        name:req.body.name,
                        email:req.body.email,
                        password:bcrypt.hashSync(req.body.password,10),
                        role:req.body.role,
                        tel:req.body.tel,
                        photo:req.body.photo,
                        path:'http://localhost:4000/images/'+req.body.email+'_'+req.body.tel+'/'+req.body.photo,
                        date_creation:req.body.date_creation,
                    });
                    await Companys.save();
                    await sendmail(req.body.email,req.body.name);

                }
                
                    res.send("valide");
                    console.log("valide");
                        }
                       
                       })
                    }
                            
                                
        catch(err){console.log(err)}




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
        let path = `./image/${type}`;
        fs2.mkdirsSync(path);
        callback(null, path);
      },
      filename: (req, file, callback) => {
        //originalname is the uploaded file's name with extn
        callback(null, 'picture'+ path.extname(file.originalname));
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



module.exports = router;