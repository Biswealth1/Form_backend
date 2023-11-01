const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection =require("./mongodb")

// const tempelatePath = path.join(__dirname,  "../tempelates")
const tempelatePath = path.join(__dirname, "../tempelates")




app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '..')))

app.get('/login' ,(req,res) =>{
    res.render("login")
})

app.get('/signup' ,(req,res) =>{
    res.render("signup")
})


app.post('/signup', async (req, res)=>{

    const data = {
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password
    }

    await collection.insertMany([data])
    res.render("home")
})

app.post('/login', async (req, res)=>{
    try{
        const check = await collection.findOne({email:req.body.email})

        if(check.password === req.body.password){
            res.render("home")
      
        }
        else{
            res.send("Wrong Password")
        }
    }
    catch{
        res.send("Wrong Details")
    }
   
})




app.listen(8000,()=>{
    console.log("port connected")
})