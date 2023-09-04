const express=require("express")
const app=new express()
const router=require("./src/routes/api")



// Security Middleware Import
const rateLimit=require("express-rate-limit")
const mongoSanitize=require("express-mongo-sanitize")
const multer=require("multer")
const helmet=require("helmet")
const jsonwebtoken=require("jsonwebtoken")
const hpp=require("hpp")
const cors=require("cors")

Security Middleware Implementation
app.use(cors())
app.use(helmet())
app.use(multer())
app.use(jsonwebtoken())
app.use(hpp())
app.use(mongoSanitize())

//Request Rate limit implementation
const limiter= rateLimit({
     windowMs:1000,//15 minute
     max:1, // limit each ip to 100 request per windowMs
})
app.use(limiter)
app.get("/",limiter,(req,res)=>{
     res.send("Hello world")
})


// Another Request Rate limit implementation 

const Ratelimiter= rateLimit({
     windowMs:60*60*1000,//1 hour
     max:5, // limit each ip to 5 request per windowMs
     message:"Too many request created from this ip, try it after an hour"
})
app.get("/RateLimit",Ratelimiter,(req,res)=>{
     res.send("Hello world")
})
app.listen(1300,()=>{
     console.log("Run success");
})



app.use("/api/v1",router)


// Undefinded Route
app.use("*",(req,res)=>{
     res.status(404).json({"Status":"Failed","Data":"Data not found"})
})

module.exports=app