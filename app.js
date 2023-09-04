const express=require("express")
const app=new express()
const router=require("./src/routes/api")

app.use("/api/v1",router)


// Undefinded Route
app.use("*",(req,res)=>{
     res.status(404).json({"Status":"Failed","Data":"Data not found"})
})

module.exports=app