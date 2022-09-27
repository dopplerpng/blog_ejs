
const {Schema, model} = require('mongoose')


//User Schema
const postSchema = new Schema({
    title:String,
    body:String,
    author:String
    
})

//User model
const Journal = model('Post', postSchema)




module.exports = Journal