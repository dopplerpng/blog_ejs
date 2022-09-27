
const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()
const {log} = require('mercedlogger')

const app = express.Router()



const Journal = require('../models/postModel')

app.get('/composer', (req,res)=>{
    res.render('composer')
})
app.post('/compose', async (req,res)=>{
    const post = new Journal({
        title:req.body.title,
        body:req.body.body,
        author:req.body.author
    })
    const newPost = await post.save()

    log.green('NEW POST','SUCESS')
    res.redirect('/')
})

app.get('/all', (req,res)=>{})
   
app.get("/journals/:title",(req,res)=>{
    const t = req.params.title
    Journal.findOne({_id:t},(err,journal)=>{
        res.render("params",{ title:journal.title , body:journal.body})
    })
})


app.get('/post:id', (req,res)=>{
   const id = req.params.id
    
})

module.exports = app