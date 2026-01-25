import type {Request,Response,NextFunction} from "express"

import {app,PORT} from "./config"
import { AdminRoute,VendorRoute } from "./routes"
import { connectDb } from "./config/db.config"

const startServer = async()=>{
    
    await connectDb()
    // routes
    app.use("/admin",AdminRoute)
    app.use("/vendor",VendorRoute)

    app.get("/",(req:Request,res:Response)=>{
        res.send("Welcome to Food Order Backend")
    })

    // server listening
    app.listen(PORT,()=>{
        console.clear()
        console.log(`server running on http://localhost:${PORT}`)
    })
}

startServer()


