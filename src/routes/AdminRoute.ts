import express,{Request,Response,NextFunction} from "express"
import { createVendor,getVendors,getVendorById } from "../controllers/AdminController.js"


const router = express.Router()

router.get("/vendors",getVendors)
router.get("/vendors/:id",getVendorById)

router.post("/vendors",createVendor)

router.get("/",(req:Request,res:Response,next:NextFunction)=>{res.json({message:"Hello from Admin"})})

export {router as AdminRoute};