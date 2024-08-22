//count the no of requests
const express = require("express")
const app = express()

var totalRequest = 0;
function calculateRequest(req,res,next){
    totalRequest++;
    console.log(totalRequest)
    next();
}
app.get("/total-request",calculateRequest,function(req,res){
    res.json({
        msg  : "Done"
    })
})

app.listen(3000)
