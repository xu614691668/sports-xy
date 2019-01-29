// 获取数据后台
const express = require("express");
const router = express.Router;
const Db = require("../module/db.js");
const db = new Db("sports");
const jwt = require("../module/jwt.js");
const upload = require("../module/upload.js");
const fs = require("fs");

    db.insertMany("shopContent",[
        
    ],(err,data)=>{

    })
// router.get("/shop",(req,res)=>{
    db.insertMany("shopContent",[
        
    ],(err,data)=>{

    })
// })

module.exports = router;