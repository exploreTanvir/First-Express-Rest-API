const app=require("./app")

//environmen variable
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})

// Without environment variable
app.listen(process.env.RUNNING_PORT,()=>{
    console.log("This is from environment variable  "+process.env.RUNNING_PORT);
})

// With environment variable
// app.listen(1120,()=>{
//     console.log("Success");
// })