exports.HelloGet=(req,res)=>{
    res.status(200).json({"Status":"Success","Data":"Hello This is my express rest api","data":"Hello This is from GET method"})
}
exports.HelloPost=(req,res)=>{
    res.status(200).json({"Status":"Success","Data":"Hello This is my express rest api","data":"Hello This is from POST method"})
}