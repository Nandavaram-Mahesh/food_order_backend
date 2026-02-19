import dotenv from "dotenv"
import express from "express"

dotenv.config({path:'.env.dev'})


export const app = express()
export const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
