const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()
const {log} = require('mercedlogger')




const app = express()

const user = process.env.DB_USER
const pass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${user}:${pass}@crud.3o3x0b0.mongodb.net/?retryWrites=true&w=majority`)
  .then(log.green('MONGODB STATUS','WORKED'))
  .catch(err =>{log.red('DATABASE ERROR', err)})

mongoose.connection
    .on('OPEN', ()=>{ log.green('DATABASE STATES', 'Connection Open')})
    .on('CLOSE', ()=>{ log.green('DATABASE STATES', 'Connection Open')})
    .on('ERROR', (error)=>{ log.green('DATABASE STATES', error )})


app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

//controllers

//views
const postRouter = require('./controllers/post')
const mainRouter = require('./controllers/main')


app.use(postRouter)
app.use(mainRouter)



app.listen(3000,()=>{
  console.log("server at port 3000");
})




