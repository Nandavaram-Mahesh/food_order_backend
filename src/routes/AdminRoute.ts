import express,{Request,Response,NextFunction} from "express"
import { createVendor,getVendors,getVendorById } from "../controllers/AdminController.js"


const router = express.Router()

router.get("/vendors/:id",getVendorById)
router.get("/",(req:Request,res:Response,next:NextFunction)=>{res.json({message:"Hello from Admin"})})

router
.route('/vendors')
.get(getVendors)
.post(createVendor)


export {router as AdminRoute};