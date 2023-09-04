const express=require("express")
const router=express.Router()
const HelloController=require("../controllers/HelloController")

//This is my first get routing
// Get request
router.get("/helloGet",HelloController.HelloGet)

// post request
router.post("/helloPost",HelloController.HelloPost)

module.exports=router