const express = require("express")

const app = express()

app.get("/health-checkup",function(req,res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  
  if(username != "Navin" || password != "Navin@123"){
    res.status(401).json({
      msg : "Sorry, you are not authorized to access this resource"
    });
    return
  }

  if(kidneyId != 1 && kidneyId != 2){
    res.status(404).json({
      msg : "Sorry, kidneyId not found"
    });
    return
  }

  res.json({
    message: "Kidney is fine!"
  })
})

app.listen(3000)
