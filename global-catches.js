const express = require("express")
const zod = require("zod")
const app = express()

app.use(express.json())

app.post("/health-checkup",function(req,res){
  const kidneys = req.body.kidneys //arr of no [1,2]
  const kidLen = kidneys.length
  res.send("You have "+kidLen+" kidneys")
})
app.use(function(err,req,res,next){
  res.json({
    msg : "Something up with our server, Try after sometime."
  })
})
app.listen(3000)
