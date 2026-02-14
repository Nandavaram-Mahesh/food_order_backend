import type { Request,Response,NextFunction } from "express"

import { VendorLoginInput } from "../dto/vendor.dto.js"
import { findVendor } from "./AdminController.js"


export const vendorLogin = async(req:Request,res:Response)=>{
    
    const {email,password} = <VendorLoginInput>req.body

    const existingVendor = findVendor('',email)

    if (existingVendor!==null){
        return res.json({"message":`Vendor with emailId:${email} logged in successfully`})
    }

    return res.json({"message":`Invalid Credentials`})

}


