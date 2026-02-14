import express,{Request,Response,NextFunction} from "express"
import { CreateVendorInput } from "../dto/vendor.dto.js"
import { vendor} from "../models/vendor.models.js"

export const findVendor = async (id:string|undefined , email?:string)=>{
    if(email){
        return await vendor.findOne({email:email})
    }
    return await vendor.findById(id)
}

export const createVendor = async (req:Request,res:Response,next:NextFunction)=>{
    const {name,ownerName,foodType,pincode,address,phone,email,password} = <CreateVendorInput>req.body
    
    let existingVendor = await findVendor('',email)

    if (existingVendor!==null){
        return res.json({"message":`User with emailId:${email} already exists`})
    }

    const createdVendor = await vendor.create(
        {
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
        lat: 0,
        lng: 0
        }
    ) 

    return res.json(createdVendor)

}

export const getVendors = async (req:Request,res:Response,next:NextFunction)=>{
    const vendors = await vendor.find()

    if(vendors!==null){
        return res.json(vendors)
    }
    return res.json({"message":"Vendor data not available"})
}

export const getVendorById = async (req:Request,res:Response,next:NextFunction)=>{
    const vendor_id = req.params.id as string
    const existingVendor = await findVendor(vendor_id)
    if (existingVendor){
        return res.json(existingVendor)
    }
    return res.json({"message":`Vendor with Id:${vendor_id} not available`}) 
}

