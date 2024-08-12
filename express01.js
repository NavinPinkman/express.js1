const express = require("express")
const app = express();

//Like an mini database where I can store data
//InMemory Database
var user = [{
        name :"John",
        Kidneys :[{
            healthy : false
        }]
    }];
//-------------------------------------------------------------------------------------------------
app.use(express.json()); 
//In get method we send info in query
app.get("/",function(req,res){
    //write logic 
    const johnKidneys = user[0].Kidneys;
    const numberofKidneys = johnKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i = 0;i<numberofKidneys;i++)
        {
            if(johnKidneys[i].healthy)
                {
                    numberofHealthyKidneys+=1;
                }
        }
    const numberofunhealthyKidneys = numberofKidneys-numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofunhealthyKidneys
    })
})
//----------------------------------------------------------------------------------------------------
//In post method we put data in BODY
app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy; //sending to update data is by *Body
    user[0].Kidneys.push({
        healthy : ishealthy
    })
    res.json({
        msg : "Done"
    })
})
//------------------------------------------------------------------------------------------------------
//replacing all kidneys to healthy kidneys
app.put("/",function(req,res){
    for(let i = 0;i< user[0].Kidneys.length; i++){
            user[0].Kidneys[i].healthy = true;
        }
    res.json({})
})
//-------------------------------------------------------------------------------------------------------
//removing unhealthy kidneys  
app.delete("/",function(req,res){
    if(isthereatleastoneunhealthyKidney()){
        const newKidneys = [];
        for(let i = 0;i<user[0].Kidneys.length;i++){
            if(user[0].Kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        user[0].Kidneys = newKidneys
        res.json({
            msg : "Done"
        })
    }
    else{
        res.status(411).json({
            msg : "You have no unhealthy kidneys."
        })
    }
})

function isthereatleastoneunhealthyKidney(){
    for(let i = 0;i<user[0].Kidneys.length;i++){
        if(!user[0].Kidneys[i].healthy){
            return true;
        }
    }
}

app.listen(3000)
