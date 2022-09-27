const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()
const {log} = require('mercedlogger')

const Journal = require('../models/postModel')



const app = express.Router()



app.get('/', (req,res)=>{
    Journal.find({}, (err, journals)=>{
        if(err){ log.red(err)}
        else{res.render('home', {journals:journals})}
    })
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/home', (req,res)=>{
    Journal.find({}, (err, journals)=>{
        if(err){ log.red(err)}
        else{res.render('home', {journals:journals})}
    })
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('*', (req,res)=>{
    res.render('error')
})





module.exports = app



