const express = require('express');
const router = express.Router();

const Post = require('./../Model/Posts');
const Reaction = require('./../Model/Reactions');
router.use(express.json());

//add Post
router.post('/add', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

    const { id,id_user, content, author } = req.body;
  
    // validate the incoming data against the schema
    const post = new Post({ id,id_user, content, author });
    const reaction = new Reaction({ id});
    try {
      await post.save();            
      await reaction.save();            
                    res.send("valide");
                    console.log("valide");
                        
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  
    // save the post data to the database

    })


//get all post    
router.get('/all', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
 try {
     await Post.find().then((result) => {
      if(result.length===0){
        res.sendStatus(500)
              }else{
res.send(result)
                    console.log("valide");}
                  })
                        
    }catch (err) {
      return res.status(400).send({ message: err.message });
    }
  

  })


//get one post by id
router.post('/getone', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
 try {
     await Post.find({id:req.body.id}).then((result) => {
res.send(result)
                    console.log("valide");})
                        
    }catch (err) {
      return res.status(400).send({ message: err.message });
    }
  

  })

//update one post by id
router.post('/delete', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
 try {
     await Post.deleteOne({id:req.body.id}).then((result) => {
res.send(result)
                    console.log("valide");})
                        
    }catch (err) {
      return res.status(400).send({ message: err.message });
    }
  

  })
//update one post by id
router.post('/update', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
 try {
     await Post.updateOne({id:req.body.id},{content:req.body.content}).then((result) => {
res.send(result)
                    console.log("valide");})
                        
    }catch (err) {
      return res.status(400).send({ message: err.message });
    }
  

  })

//get reaction by id post  
router.get('/getreaction', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
 try {
     await Reaction.find().then((result) => {
res.send(result)
                    console.log("valide");})
                        
    }catch (err) {
      return res.status(400).send({ message: err.message });
    }
  

  })
//set reaction
router.put('/setreaction/:id', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
 try {
     await Reaction.updateOne({id:req.params.id},{reaction:req.body.reaction,$push: { id_users:req.body.id_users }}).then((result) => {
res.send(result)
                    console.log("valide");})
                        
    }catch (err) {
      return res.status(400).send({ message: err.message });
    }
  

  })

   

  
  





module.exports = router;