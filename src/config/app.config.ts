import dotenv from "dotenv"
dotenv.config({path:'.env.dev'})

import express from "express"
import { AdminRoute, VendorRoute } from "../routes"


export const app = express()
export const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use("/admin",AdminRoute)
app.use("/vendor",VendorRoute)