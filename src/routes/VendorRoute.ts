import express,{Request,Response,NextFunction} from "express"

import { vendorLogin } from "../controllers/VendorController.js"

const router = express.Router()

router.get("/",(req:Request,res:Response,next:NextFunction)=>{
    res.json({message:"Hello from Vendor"})
})

router.post("/login",vendorLogin)

export {router as VendorRoute}