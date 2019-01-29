// 后台
const express = require("express");
const apirouter = require("./router/app_router.js");
const bodyParser = require("body-parser");
const http = express();
http.listen(3000,()=>{
    console.log("http://localhost:3000 run")
})
http.use(bodyParser.urlencoded({extended:false}));

http.use("/api",apirouter);


http.all("*",(req,res)=>{
    res.header("access-control-alown-origin","*")
    res.sendFile(__dirname+req.url)
})