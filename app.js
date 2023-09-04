const express=require("express")
const app=new express()
const router=require("./src/routes/api")

app.use("/api/v1",router)

module.exports=app