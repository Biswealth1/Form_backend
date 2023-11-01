const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUpPage")
.then(()=>{
    console.log('mongodb connected');
})
.catch((err)=>{
    console.log('mongodb  failed to connected', err.message);
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    }
})
const collection=new mongoose.model("SimpleCollections",LogInSchema)

module.exports = collection