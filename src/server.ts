import {app,PORT} from "./config"
import {Request,Response,NextFunction} from "express"

// routes
app.get("/",(req:Request,res:Response)=>{
    res.send("Welcome to Food Order Backend")
})
// server listening
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

