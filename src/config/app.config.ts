import express from "express"


export const app = express()
export const PORT = 5000

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
