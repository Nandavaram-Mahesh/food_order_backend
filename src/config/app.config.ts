import dotenv from "dotenv"
import express from "express"

dotenv.config({path:'.env.dev'})

import { AdminRoute} from "../routes/AdminRoute.js"
import {VendorRoute} from "../routes/VendorRoute.js"


export const app = express()
export const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use("/admin",AdminRoute)
app.use("/vendor",VendorRoute)
