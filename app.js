const express=require('express');
const bodyParser=require("body-parser");
const app=express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser());

var ABC={color:"orange",age:5,animal:"cat"};

app.get("/",function a(req,res){
    res.send(ABC);
});


app.get("/getData/apple",(req,res)=>{
    res.send("APPLE");
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started... ");
})