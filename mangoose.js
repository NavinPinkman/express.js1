const mongoose = require('mongoose');
const express = require('express')
const app = express()
app.use(express.json())

// Connection string
mongoose.connect('mongodb+srv://navinvenkatv:navinswaggerchellakutty@cluster0.zr0co.mongodb.net/nestify');

const User = mongoose.model("Users",{
  email : String,
  username : String,
  password : String
})

app.post('/signin',async function(req,res){
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
   
  const userexists = await User.findOne({email:email})
  if(userexists){
    res.status(400).send("User alreay exists")
  }
    
  const newuser = new User({
    email : email,
    username  : username,
    password : password
  })

  newuser.save()
  
})

app.listen(3000)
